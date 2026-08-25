"use client";

import React, { useEffect, useState } from "react";
import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";
import {
  fetchCMSProductById,
  formatImageUrl,
  parseGalleryImages,
  CMSProduct,
} from "../../../lib/api";

type ProductDetailPageProps = {
  params: {
    id: string;
  };
};

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const productId = params.id;
  const [product, setProduct] = useState<CMSProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeImage, setActiveImage] = useState<string>("");
  const [galleryList, setGalleryList] = useState<string[]>([]);

  useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true);
        const data = await fetchCMSProductById(productId);
        if (data) {
          setProduct(data);
          const images = parseGalleryImages(data.galleryImages, data.imageUrl);
          setGalleryList(images);
          setActiveImage(
            images[0] ? formatImageUrl(images[0]) : formatImageUrl(data.imageUrl)
          );
        }
      } catch (err) {
        console.error("Error loading CMS product detail:", err);
      } finally {
        setLoading(false);
      }
    }

    if (productId) {
      loadProduct();
    }
  }, [productId]);

  // Parse specifications into individual bullet points
  const specLines = (product?.specifications || "")
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <div className="page-wrapper">
      <style jsx global>{`
        .product-media-showcase {
          margin-top: 10vh;
          padding: 44px 0 24px;
          background: linear-gradient(180deg, #f7f6f1 0%, #ffffff 100%);
        }
        .product-media-shell {
          display: grid;
          grid-template-columns: minmax(0, 1.4fr) minmax(320px, 0.8fr);
          gap: 28px;
          align-items: stretch;
        }
        .product-feature-card,
        .product-info-card,
        .product-gallery-card {
          background: #fff;
          border: 1px solid rgba(27, 37, 27, 0.1);
          box-shadow: 0 18px 42px rgba(17, 24, 17, 0.08);
        }
        .product-feature-card {
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .product-feature-card img {
          width: 100%;
          height: 100%;
          min-height: 520px;
          max-height: 620px;
          object-fit: contain;
          display: block;
          background: #fff;
        }
        .product-info-card {
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #1b251b;
          color: #f4f1e5;
        }
        .product-info-eyebrow {
          margin-bottom: 14px;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #9fc44a;
        }
        .product-info-card h1 {
          margin: 0 0 12px;
          font-size: 2.6rem;
          line-height: 1.05;
          text-transform: uppercase;
          color: #fff;
          font-weight: bold;
        }
        .product-info-card h2 {
          margin: 0 0 20px;
          font-size: 1.25rem;
          font-weight: 600;
          color: #d7d1bf;
        }
        .product-info-card p {
          margin: 0 0 24px;
          line-height: 1.8;
          color: #ece8db;
        }
        .product-quick-specs {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }
        .product-quick-spec {
          padding: 14px 16px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .product-quick-spec strong {
          display: block;
          margin-bottom: 4px;
          color: #9fc44a;
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .product-quick-spec span {
          color: #fff;
          font-size: 1rem;
        }
        .product-gallery-wrap {
          padding: 30px 0 20px;
        }
        .product-gallery-heading {
          margin: 0 0 20px;
          font-size: 1.6rem;
          font-weight: 700;
          color: #1b251b;
          text-transform: uppercase;
        }
        .product-gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }
        .product-gallery-card {
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .product-gallery-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
        }
        .product-gallery-card img {
          width: 100%;
          height: 240px;
          object-fit: contain;
          display: block;
          padding: 16px;
          background: #fbfaf6;
        }
        .spec-box-header {
          background-color: #efefef;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 60px;
        }
        .spec-box-header h5 {
          margin: 0;
          font-weight: bold;
          font-size: 1.15rem;
          color: #333;
          text-align: center;
        }
        @media only screen and (max-width: 1199px) {
          .product-media-shell {
            grid-template-columns: 1fr;
          }
          .product-feature-card img {
            min-height: 420px;
          }
          .product-gallery-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media only screen and (max-width: 767px) {
          .product-media-showcase {
            margin-top: 13vh;
            padding: 20px 0 10px;
          }
          .product-info-card {
            padding: 24px 18px;
          }
          .product-info-card h1 {
            font-size: 1.9rem;
          }
          .product-info-card h2 {
            font-size: 1rem;
          }
          .product-feature-card img {
            min-height: 280px;
            max-height: 380px;
          }
          .product-quick-specs,
          .product-gallery-grid {
            grid-template-columns: 1fr;
          }
          .product-gallery-card img {
            height: 220px;
          }
        }
      `}</style>

      <SiteHeader />

      {loading ? (
        <div style={{ minHeight: "60vh", paddingTop: "25vh", textAlign: "center" }}>
          <h2 style={{ fontWeight: "bold", color: "#1b251b" }}>LOADING PRODUCT DETAILS...</h2>
        </div>
      ) : !product ? (
        <section className="product-media-showcase">
          <div className="auto-container text-center" style={{ padding: "80px 0" }}>
            <h2>Product Not Found</h2>
            <p>The requested product could not be loaded or is currently unavailable.</p>
            <a href="/projects" className="theme-btn btn-style-one mt-4">
              <span>Back to Products</span>
            </a>
          </div>
        </section>
      ) : (
        <>
          {/* Main Top Showcase Section */}
          <section className="product-media-showcase">
            <div className="auto-container">
              <div className="product-media-shell">
                {/* Main Feature Image Frame */}
                <div className="product-feature-card">
                  <img
                    src={activeImage || formatImageUrl(product.imageUrl)}
                    alt={product.title}
                  />
                </div>

                {/* Main Info Card */}
                <div className="product-info-card">
                  <div className="product-info-eyebrow">
                    {product.subtitle || product.categoryName || "Blue Thunder Series"}
                  </div>
                  <h1>{product.title}</h1>
                  {product.modelNumber ? <h2>Model: {product.modelNumber}</h2> : null}
                  {product.description ? <p>{product.description}</p> : null}

                  {/* Quick Specs Grid */}
                  <div className="product-quick-specs">
                    {product.pullKg ? (
                      <div className="product-quick-spec">
                        <strong>Line Pull</strong>
                        <span>{product.pullKg}</span>
                      </div>
                    ) : null}
                    {product.workingPressure ? (
                      <div className="product-quick-spec">
                        <strong>Working Pressure</strong>
                        <span>{product.workingPressure}</span>
                      </div>
                    ) : null}
                    {product.rotationSpeed ? (
                      <div className="product-quick-spec">
                        <strong>Rotation Speed</strong>
                        <span>{product.rotationSpeed}</span>
                      </div>
                    ) : null}
                    {product.hydraulicPump ? (
                      <div className="product-quick-spec">
                        <strong>Hydraulic Pump</strong>
                        <span>{product.hydraulicPump}</span>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Detailed Specifications & Model Information Section */}
          <section className="project-details mt-30" style={{ padding: "40px 0" }}>
            <div className="auto-container">
              <div id="large-view-details" style={{ marginLeft: "4vw", marginRight: "4vw" }}>
                {/* Model Number Row */}
                {product.modelNumber ? (
                  <div className="row ml-3 mb-4">
                    <div className="col-lg-3 col-md-4 spec-box-header">
                      <h5>Model</h5>
                    </div>
                    <div className="col-lg-9 col-md-8">
                      <div className="text pt-2 llh-text">
                        <h3 style={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                          {product.modelNumber}
                        </h3>
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* Description Row */}
                {product.description ? (
                  <div className="row ml-3 mb-4">
                    <div className="col-lg-3 col-md-4 spec-box-header">
                      <h5>Description</h5>
                    </div>
                    <div className="col-lg-9 col-md-8">
                      <div
                        className="text pt-2 llh-text"
                        style={{ fontSize: "1.05rem", lineHeight: "1.8", whiteSpace: "pre-line" }}
                      >
                        {product.description}
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* Specifications Row */}
                {product.specifications ? (
                  <div className="row ml-3 mb-4">
                    <div className="col-lg-3 col-md-4 spec-box-header">
                      <h5>Specifications</h5>
                    </div>
                    <div className="col-lg-9 col-md-8">
                      <div className="row pt-2 llh-spec">
                        <div className="col-12">
                          <ul className="list llh-list" style={{ paddingLeft: "18px" }}>
                            {specLines.length > 0
                              ? specLines.map((line, idx) => {
                                  const parts = line.split(/[:\-]/);
                                  if (parts.length >= 2) {
                                    return (
                                      <li key={idx} style={{ marginBottom: "8px", fontSize: "1.05rem" }}>
                                        <b>{parts[0].trim()}</b> - {parts.slice(1).join("-").trim()}
                                      </li>
                                    );
                                  }
                                  return (
                                    <li key={idx} style={{ marginBottom: "8px", fontSize: "1.05rem" }}>
                                      {line}
                                    </li>
                                  );
                                })
                              : <li>{product.specifications}</li>}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              {/* Single & Multiple Image Gallery Grid */}
              {galleryList.length > 0 ? (
                <div className="product-gallery-wrap mt-5" style={{ marginLeft: "4vw", marginRight: "4vw" }}>
                  <h3 className="product-gallery-heading">Product Gallery</h3>
                  <div className="product-gallery-grid">
                    {galleryList.map((imgUrl, index) => {
                      const fullUrl = formatImageUrl(imgUrl);
                      const isSelected = activeImage === fullUrl;
                      return (
                        <div
                          key={index}
                          className="product-gallery-card"
                          onClick={() => setActiveImage(fullUrl)}
                          style={{
                            border: isSelected ? "3px solid #9fc44a" : "1px solid rgba(27, 37, 27, 0.12)",
                          }}
                        >
                          <img
                            src={fullUrl}
                            alt={`${product.title} gallery thumbnail ${index + 1}`}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </div>
          </section>
        </>
      )}

      <SiteFooter />
    </div>
  );
}
