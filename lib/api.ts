export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api";

export const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080";

export interface CMSProduct {
  id?: number;
  title: string;
  subtitle?: string;
  modelNumber?: string;
  pullKg?: string;
  rotationSpeed?: string;
  hydraulicPump?: string;
  workingPressure?: string;
  description?: string;
  specifications?: string;
  imageUrl: string;
  galleryImages?: string;
  categorySlug: string;
  categoryName?: string;
  tags?: string;
  active: boolean;
  createdAt?: string;
  updatedAt?: string;
}

/**
 * Formats image URLs: handles relative upload paths (/uploads/...), full URLs, or fallback image.
 */
export function formatImageUrl(url?: string): string {
  if (!url || !url.trim()) {
    return "/assets/images/resource/purse-seineX.png";
  }

  const cleanUrl = url.trim();

  if (cleanUrl.startsWith("http://") || cleanUrl.startsWith("https://")) {
    return cleanUrl;
  }

  if (cleanUrl.startsWith("/")) {
    return `${BACKEND_URL}${cleanUrl}`;
  }

  return `${BACKEND_URL}/${cleanUrl}`;
}

/**
 * Parses comma-separated galleryImages string and combines with main image URL into an array.
 */
export function parseGalleryImages(
  galleryImagesStr?: string,
  mainImageUrl?: string
): string[] {
  const images: string[] = [];

  if (galleryImagesStr && galleryImagesStr.trim()) {
    const split = galleryImagesStr
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    images.push(...split);
  }

  if (mainImageUrl && mainImageUrl.trim()) {
    const formattedMain = mainImageUrl.trim();
    if (!images.includes(formattedMain)) {
      images.unshift(formattedMain);
    }
  }

  return images.length > 0
    ? images
    : [mainImageUrl?.trim() || "/assets/images/resource/purse-seineX.png"];
}

/**
 * Safely fetches active products from backend CMS API. Returns empty array if backend is unreachable.
 */
export async function fetchCMSProducts(): Promise<CMSProduct[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/products`, { cache: "no-store" });
    if (!res.ok) return [];

    const data: CMSProduct[] = await res.json();
    return Array.isArray(data) ? data.filter((p) => p.active !== false) : [];
  } catch (error) {
    console.warn("CMS backend API unreachable:", error);
    return [];
  }
}

/**
 * Safely fetches product by ID from backend CMS API.
 */
export async function fetchCMSProductById(
  id: string | number
): Promise<CMSProduct | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/products/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;

    const data: CMSProduct = await res.json();
    return data && data.active !== false ? data : null;
  } catch (error) {
    console.warn(`CMS backend API unreachable for product ${id}:`, error);
    return null;
  }
}
