"use client";

import { useEffect } from "react";
import { fetchCMSProducts, formatImageUrl, CMSProduct } from "../lib/api";

function normalizeText(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]/g, " ").trim();
}

function matchesCategory(
  headerText: string,
  categoryName: string,
  categorySlug: string
): boolean {
  const h = normalizeText(headerText);
  const name = normalizeText(categoryName);
  const slug = normalizeText(categorySlug);

  if (!h || (!name && !slug)) return false;

  // Exact phrase match
  if (h === name || (slug && h === slug)) return true;

  // Haulers & Winches matching
  if (
    (name.includes("hauler") || name.includes("winch")) &&
    h.includes("hauler") &&
    h.includes("winch")
  ) {
    return true;
  }

  // Inboard Marine Engines matching (distinct from spares)
  if (
    name.includes("engine") &&
    h.includes("engine") &&
    !h.includes("spares") &&
    !name.includes("spares")
  ) {
    return true;
  }

  // Spares & Accessories matching
  if (
    (name.includes("spares") || name.includes("access")) &&
    (h.includes("spares") || h.includes("access"))
  ) {
    return true;
  }

  // Substring match if name is sufficiently long
  if (name.length > 4 && h.includes(name)) return true;

  return false;
}

export default function ProjectsCMSInjector() {
  useEffect(() => {
    let isMounted = true;

    async function injectCMSProducts() {
      const cmsProducts = await fetchCMSProducts();
      if (!isMounted || !cmsProducts || cmsProducts.length === 0) return;

      // Track existing titles to prevent duplicate card additions
      const existingCardTitles = new Set(
        Array.from(
          document.querySelectorAll(
            ".project-block h3, .project-block h5, .product-preview-card__title"
          )
        )
          .map((el) => el.textContent?.trim().toLowerCase())
          .filter(Boolean)
      );

      // Find all hardcoded category banner sections on the page
      // They typically look like <section style="background-color: #1b251b..."> ... <h2>TITLE</h2>
      const allHeaderSections = Array.from(
        document.querySelectorAll("section .light-header h2, section .light-header h3, .sub-prod-head-1 h2")
      );

      // Map existing category header elements to their following grid rows
      const existingCategoryMap: { headerText: string; rowContainer: HTMLElement }[] = [];

      allHeaderSections.forEach((hEl) => {
        const text = hEl.textContent?.trim() || "";
        if (!text) return;

        // Find the closest section ancestor
        const headerSection = hEl.closest("section");
        if (!headerSection) return;

        // Look for the next section that contains a .row grid
        let nextEl = headerSection.nextElementSibling;
        let foundRow: HTMLElement | null = null;

        while (nextEl && !foundRow) {
          if (nextEl.tagName.toLowerCase() === "section") {
            foundRow = nextEl.querySelector(".row");
            break;
          }
          nextEl = nextEl.nextElementSibling;
        }

        if (foundRow) {
          existingCategoryMap.push({ headerText: text, rowContainer: foundRow });
        }
      });

      // Find insertion anchor for new dynamic category sections (before main footer)
      const footerElement = document.querySelector("#max-footer, .main-footer, footer");
      const pageWrapper = document.querySelector(".page-wrapper") || document.body;

      // Map to hold newly created dynamic category rows
      const dynamicCategoryMap = new Map<string, HTMLElement>();

      cmsProducts.forEach((product: CMSProduct) => {
        if (!product || !product.title) return;

        const titleClean = product.title.trim();
        const titleLower = titleClean.toLowerCase();

        // Skip if a card with this exact title already exists
        if (existingCardTitles.has(titleLower)) return;

        const catName = product.categoryName?.trim() || product.categorySlug?.trim() || "General Products";
        const catSlug = product.categorySlug?.trim() || "";

        // Create the card element with flagship structure
        const cardCol = document.createElement("div");
        cardCol.className = "col-lg-4 col-md-6 project-block show2";
        cardCol.style.cssText =
          "opacity: 1 !important; visibility: visible !important; display: block !important; margin-bottom: 30px;";

        const formattedImg = formatImageUrl(product.imageUrl);
        const detailHref = product.id ? `/product/${product.id}` : "#";

        cardCol.innerHTML = `
          <div class="inner-box">
            <div class="image" style="background: #fff; border-radius: 4px; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.08);">
              <img src="${formattedImg}" alt="${titleClean}" style="width: 100%; height: 260px; object-fit: contain; padding: 12px; display: block;" />
            </div>
            <div class="text-overlay test-desc">
              <div class="link">
                <a href="${detailHref}" class="theme-btn btn-style-one goToProd">
                  <span>
                    <h3 style="color: whitesmoke; font-size: 1.25em; font-weight: bold; text-transform: uppercase;">${titleClean}</h3>
                  </span>
                </a>
              </div>
            </div>
          </div>
        `;

        // 1. Check if category matches any existing hardcoded section on the page
        const matchedSection = existingCategoryMap.find((item) =>
          matchesCategory(item.headerText, catName, catSlug)
        );

        if (matchedSection) {
          // Append to existing category grid row
          matchedSection.rowContainer.appendChild(cardCol);
          existingCardTitles.add(titleLower);
          return;
        }

        // 2. If no existing category matches, create or reuse a dynamic category section
        const catKey = catName.toUpperCase();
        let targetRow = dynamicCategoryMap.get(catKey);

        if (!targetRow) {
          // Create new Category Banner Section matching exact dark theme
          const newBannerSection = document.createElement("section");
          newBannerSection.className = "mb-3 cms-dynamic-cat-banner";
          newBannerSection.style.cssText =
            "background-color: #1b251b; padding: 4vh; margin: 40px 4vw 0 4vw;";
          newBannerSection.innerHTML = `
            <div class="auto-container sub-prod-head-1">
              <div class="wrapper-box light-header" style="text-align: center">
                <h2 style="font-weight: bold; color: #fff; text-transform: uppercase; letter-spacing: 0.04em;">
                  ${catKey}
                </h2>
              </div>
            </div>
          `;

          // Create new Category Products Grid Section
          const newGridSection = document.createElement("section");
          newGridSection.className = "projects-section style-two cms-dynamic-cat-grid";
          newGridSection.innerHTML = `
            <div class="auto-container">
              <div class="row" style="padding: 2vw 3vw 3vw 3vw"></div>
            </div>
          `;

          targetRow = newGridSection.querySelector(".row") as HTMLElement;
          dynamicCategoryMap.set(catKey, targetRow);

          // Insert before footer
          if (footerElement && footerElement.parentNode) {
            footerElement.parentNode.insertBefore(newBannerSection, footerElement);
            footerElement.parentNode.insertBefore(newGridSection, footerElement);
          } else {
            pageWrapper.appendChild(newBannerSection);
            pageWrapper.appendChild(newGridSection);
          }
        }

        // Append card to the dynamic category's row
        targetRow.appendChild(cardCol);
        existingCardTitles.add(titleLower);
      });
    }

    const timer = setTimeout(() => {
      injectCMSProducts();
    }, 150);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  return null;
}
