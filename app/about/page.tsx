import type { Metadata } from "next";
import SiteFooter from "../../components/SiteFooter";

const heroImage = "/assets/images/about_Main_page_slide/Main_slide_05.avif";

const aboutSlides = [
  "/assets/images/About_Slide_move_Images/about_slide_section_image01.jpeg",
  "/assets/images/About_Slide_move_Images/about_slide_section_image02.jpeg",
  "/assets/images/About_Slide_move_Images/about_slide_section_image03.jpeg",
  "/assets/images/About_Slide_move_Images/about_slide_section_image04.jpeg",
  "/assets/images/About_Slide_move_Images/about_slide_section_image05.jpeg",
];

const products = [
  {
    src: "https://res.cloudinary.com/djsdwv2na/image/upload/v1781600227/ll1_tvcmci.jpg",
    alt: "Tuna Longline hauler",
    title: "Tuna Longline Hauler",
  },
  {
    src: "https://res.cloudinary.com/djsdwv2na/image/upload/v1781600453/ph1_dua5hb.jpg",
    alt: "Pot hauler",
    title: "Pot Hauler",
  },
  {
    src: "https://res.cloudinary.com/djsdwv2na/image/upload/v1781600537/ps1_xyysfe.png",
    alt: "Purse seine winch",
    title: "Purse Seine Winch",
  },
  {
    src: "https://res.cloudinary.com/djsdwv2na/image/upload/v1781600038/cb1_toihek.jpg",
    alt: "Combined net and pot hauler",
    title: "Combined Net & Pot Hauler",
  },
  {
    src: "https://res.cloudinary.com/djsdwv2na/image/upload/v1781600039/cb2_dqalfz.jpg",
    alt: "Net hauler",
    title: "Net Hauler",
  },
  {
    src: "https://res.cloudinary.com/djsdwv2na/image/upload/v1781600145/ml1_wz7qgf.jpg",
    alt: "Manual and Hydraulic Line Hauler",
    title: "Manual & Hydraulic Line Hauler",
  },
];

const reviews = [
  {
    src: "/assets/images/CUSTOMER%20REVIEWS/Mr.%20K.H.%20Nandasiri.png",
    alt: "Mr. K.H. Nandasiri review",
    name: "Mr. K.H. Nandasiri",
    roleLines: ["CEO - Chejana Holdings & ICE Factories", "Matara", "Sri Lanka"],
    text: "Nuradha Engineering serviced us with exceptional customer service and provided us with customized commercial fishing equipment.",
  },
  {
    src: "/assets/images/CUSTOMER%20REVIEWS/Owen%20Mungai.png",
    alt: "Mr. Owen Mungai review",
    name: "Mr. Owen Mungai",
    roleLines: ["CEO - Home Country Ltd", "Kenya"],
    text: "Nuradha Engineering was exceptional. The team helped me with all their dedication and the product quality of the haulers was on par with international standards. They helped me customize the product as per my requirement.",
  },
  {
    src: "/assets/images/CUSTOMER%20REVIEWS/L.H%20Deepal%20Buddika.png",
    alt: "Mr. L.H. Deepal Buddika review",
    name: "Owner - Mr. L.H. Deepal Buddika",
    roleLines: ["Nikil Putha Fishing Line", "Mirissa", "Sri Lanka."],
    text: "Nuradha Engineering was exceptional. The team helped me with all their dedication and the product quality of the haulers was on par with international standards. They helped me customize the product as per my requirement.",
  },
  {
    src: "/assets/images/CUSTOMER%20REVIEWS/Sumithra%20Fernando.jpeg",
    alt: "Mr. Sumithra Fernando review",
    name: "Mr. Sumithra Fernando",
    roleLines: ["Managing Director", "Danusha Marine Lanka Pvt Ltd.", "Panadura , Sri Lanka"],
    text: "Nuradha Engineering team includes highly dedicated specialists in supplying corporate fishing equipment. We were very pleased with their customer service and timelines of supplying the ordered products.",
  },
  {
    src: "/assets/images/CUSTOMER%20REVIEWS/Suranga%20Fernando.png",
    alt: "Suranga Fernando and Sarath Fernando review",
    name: "Suranga Fernando & Sarath Fernando",
    roleLines: ["Managing Director & CEO", "Island Seabird Group Ltd", "Seychelles"],
    text: "Nuradha Engineering, a team of specialists in building and supplying commercial fishing equipment assisted us along our journey in the last five years. We have always felt their commitment to excellence and to deliver a product in line with international standards.",
  },
  {
    src: "/assets/images/CUSTOMER%20REVIEWS/Muditha.jpeg",
    alt: "Mr. Muditha review",
    name: "Mr. Muditha",
    roleLines: ["Owner", "Marlu, Seychelles"],
    text: "Nuradha Engineering was fast, courteous, and very helpful. They helped me solve my problem using their expertise and knowledge gained over the years. They have great products among Sri Lankan exporters of haulers.",
  },
  {
    src: "/assets/images/CUSTOMER%20REVIEWS/Mahesh.png",
    alt: "Mr. Mahesh Fernando review",
    name: "Mr. Mahesh Fernando",
    roleLines: ["Managing Director", "Selanie Boat Yard (Pvt) Ltd", "Fullerton Industrial Estate, Nagoda, Sri Lanka"],
    text: "The reason why we utilize fishing haulers from Nuradha Engineering is due to the trust we have on their excellent finishing and the longevity of their products.",
  },
];

export const metadata: Metadata = {
  title: "About Nuradha",
  description: "About Nuradha Engineering and its marine, hydraulic, and sealing solutions.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <style>{`
        .about-page {
          min-height: 100vh;
          overflow-x: hidden;
          background: #050505;
        }

        .about-hero-header {
          position: fixed;
          inset: 0 0 auto 0;
          z-index: 50;
          height: 76px;
          background: #050505;
          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        .about-hero-header .inner {
          max-width: 1900px;
          height: 100%;
          margin: 0 auto;
          padding: 0 4vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .about-hero-logo {
          display: inline-flex;
          align-items: center;
          flex: 0 0 auto;
        }

        .about-hero-logo img {
          display: block;
          width: 56px;
          height: auto;
        }

        .about-hero-nav {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          padding-right: 1vw;
          flex-wrap: nowrap;
        }

        .about-hero-nav a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.55rem 0.9rem;
          color: #f8f8f8;
          font-size: 0.96rem;
          font-weight: 700;
          line-height: 1;
          text-decoration: none;
          white-space: nowrap;
          border: 3px solid transparent;
          transition: border-color 180ms ease, color 180ms ease;
        }

        .about-hero-nav a:hover {
          color: #fff;
        }

        .about-hero-nav a.active {
          border-color: #6e9900;
        }

        .about-hero-stage {
          position: relative;
          height: 100vh;
          background: #000;
          overflow: hidden;
        }

        .about-hero-slide {
          position: absolute;
          inset: 0;
          background-image: url("${heroImage}");
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .about-hero-slide::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(3, 5, 8, 0.22) 0%, rgba(3, 5, 8, 0.24) 42%, rgba(3, 5, 8, 0.34) 100%);
        }

        .about-hero-content {
          position: relative;
          z-index: 1;
          height: 100%;
          box-sizing: border-box;
          padding: 76px 2rem 2rem;
          display: grid;
          place-items: center;
          text-align: center;
        }

        .about-hero-title {
          margin: 0;
          color: #fcf9ee;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(3.8rem, 8vw, 7rem);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          -webkit-text-stroke: 1.8px rgba(222, 214, 184, 0.95);
          text-shadow:
            0 2px 0 rgba(43, 33, 11, 0.25),
            0 12px 24px rgba(0, 0, 0, 0.34);
        }

        .about-hero-arrows {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
        }

        .about-hero-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 56px;
          height: 56px;
          display: grid;
          place-items: center;
          background: rgba(7, 7, 7, 0.24);
          border: 0;
        }

        .about-hero-arrow::before {
          content: "";
          width: 18px;
          height: 18px;
          border-top: 3px solid #111;
          border-right: 3px solid #111;
        }

        .about-hero-arrow.prev {
          left: 0.8rem;
        }

        .about-hero-arrow.prev::before {
          transform: rotate(-135deg);
          margin-left: 4px;
        }

        .about-hero-arrow.next {
          right: 0.8rem;
        }

        .about-hero-arrow.next::before {
          transform: rotate(45deg);
          margin-right: 4px;
        }

        .about-detail-band {
          position: relative;
          z-index: 1;
        }

        .about-slide-gallery {
          margin: 0 10vw 5vh;
          padding: 4vh 0;
          background: linear-gradient(135deg, #1b251b 0%, #2b3828 100%);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 45px rgba(27, 37, 27, 0.18);
        }

        .about-slide-gallery .gallery-header {
          padding: 0 4vw 3vh;
          text-align: center;
        }

        .about-slide-gallery .gallery-header h3 {
          margin-bottom: 1vh;
          color: #dedee0;
          letter-spacing: 0.14em;
        }

        .about-slide-gallery .gallery-header p {
          margin: 0;
          color: rgba(222, 238, 224, 0.82);
        }

        .about-slide-marquee {
          position: relative;
          display: flex;
          width: max-content;
          animation: aboutSlideMove 28s linear infinite;
        }

        .about-slide-gallery:hover .about-slide-marquee {
          animation-play-state: paused;
        }

        .about-slide-track {
          display: flex;
          gap: 1.5rem;
          padding-left: 1.5rem;
        }

        .about-slide-card {
          position: relative;
          flex: 0 0 320px;
          width: 320px;
          height: 240px;
          overflow: hidden;
          border-radius: 20px;
          background: #d9dccd;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.22);
        }

        .about-slide-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .about-slide-card:hover img {
          transform: scale(1.06);
        }

        .about-slide-fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 10vw;
          z-index: 2;
          pointer-events: none;
        }

        .about-slide-fade.left {
          left: 0;
          background: linear-gradient(90deg, #1f2a1e 0%, rgba(31, 42, 30, 0) 100%);
        }

        .about-slide-fade.right {
          right: 0;
          background: linear-gradient(270deg, #233022 0%, rgba(35, 48, 34, 0) 100%);
        }

        .about-tick-list {
          padding: 3vh 4vw 5vh 25vw;
          text-align: start;
        }

        .about-tick-list li {
          position: relative;
          margin-bottom: 0.9rem;
          padding-left: 2.2rem;
          font-weight: bold;
          list-style: none;
        }

        .about-tick-list li::before {
          content: "";
          position: absolute;
          top: 0.32rem;
          left: 0;
          width: 18px;
          height: 18px;
          background: url("/assets/images/icons/icon-1.png") center/contain no-repeat;
        }

        .about-tick-list li.blue-thunder-img::before {
          display: none;
        }

        .about-brand-heading {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .about-brand-heading img {
          width: clamp(150px, 16vw, 220px);
          height: auto;
        }

        .about-product-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.5rem;
          margin: 0 0 3rem 0;
          padding-left: 12vw;
        }

        .about-product-card {
          overflow: hidden;
          border-radius: 18px;
          background: #ffffff;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
        }

        .about-product-card img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
        }

        .about-product-card h6 {
          margin: 0;
          padding: 1rem 1rem 1.1rem;
          color: #1f241d;
          font-size: 1rem;
          font-weight: 700;
          line-height: 1.4;
          text-align: center;
        }

        .review-slide-main {
          margin-top: -2vh;
          z-index: 5;
        }

        .review-slider-all {
          margin-left: 11vw;
          width: 80%;
          min-height: 60vh;
          height: auto;
        }

        .about-vision-section {
          background: #050505;
          color: #fff;
          padding: 6vh 0 4vh;
        }

        .about-vision-section .vision-text {
          padding: 0 5vw;
          color: #f6f6f6;
          line-height: 1.9;
          font-size: 1.05rem;
        }

        @keyframes aboutSlideMove {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media only screen and (max-width: 991px) {
          .about-hero-header {
            height: 72px;
          }

          .about-hero-content {
            padding-top: 72px;
          }

          .about-hero-nav {
            gap: 0.45rem;
            padding-right: 0;
          }

          .about-hero-nav a {
            font-size: 0.84rem;
            padding: 0.45rem 0.6rem;
          }

          .about-hero-title {
            font-size: clamp(3rem, 10vw, 5.8rem);
            -webkit-text-stroke: 1.4px rgba(222, 214, 184, 0.95);
          }

          .about-slide-gallery {
            margin: 0 6vw 5vh;
          }

          .about-tick-list {
            padding-left: 8vw;
          }

          .about-product-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            padding-left: 0;
          }

          .review-slider-all {
            width: 86%;
            margin-left: 7vw;
          }
        }

        @media only screen and (max-width: 767px) {
          .about-hero-header {
            height: 68px;
          }

          .about-hero-header .inner {
            padding: 0 3vw;
          }

          .about-hero-logo img {
            width: 46px;
          }

          .about-hero-nav {
            gap: 0.35rem;
          }

          .about-hero-nav a {
            font-size: 0.72rem;
            padding: 0.35rem 0.45rem;
            border-width: 2px;
          }

          .about-hero-content {
            padding-top: 68px;
          }

          .about-hero-arrow {
            width: 48px;
            height: 48px;
          }

          .about-hero-title {
            font-size: clamp(2.35rem, 14vw, 4rem);
            letter-spacing: 0.04em;
          }

          .about-slide-gallery {
            margin: 0 4vw 4vh;
            border-radius: 18px;
          }

          .about-slide-gallery .gallery-header {
            padding: 0 6vw 2.5vh;
          }

          .about-slide-gallery .gallery-header h3 {
            font-size: 1.05rem;
            letter-spacing: 0.1em;
          }

          .about-brand-heading {
            gap: 0.5rem;
          }

          .about-product-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
            padding-left: 0;
          }

          .about-product-card img {
            height: 200px;
          }

          .about-slide-card {
            flex-basis: 220px;
            width: 220px;
            height: 170px;
            border-radius: 16px;
          }

          .about-slide-fade {
            width: 14vw;
          }

          .about-tick-list {
            padding-left: 0;
          }

          .review-slider-all {
            width: 92%;
            margin-left: 4vw;
          }
        }
      `}</style>

      <header className="about-hero-header">
        <div className="inner">
          <a className="about-hero-logo" href="/" aria-label="Nuradha home">
            <img src="/assets/images/logo.png" alt="Nuradha Engineering" />
          </a>

          <nav className="about-hero-nav" aria-label="Primary">
            <a href="/">Home</a>
            <a className="active" href="/about" aria-current="page">
              About Us
            </a>
            <a href="/projects">Products</a>
            <a href="/contact">Contact Us</a>
          </nav>
        </div>
      </header>

      <section className="about-hero-stage" aria-label="About hero">
        <div className="about-hero-slide">
          <div className="about-hero-content">
            <h1 className="about-hero-title">About Us</h1>
          </div>

          <div className="about-hero-arrows" aria-hidden="true">
            <div className="about-hero-arrow prev" />
            <div className="about-hero-arrow next" />
          </div>
        </div>
      </section>

      <section className="testimonials-section-two style-two about-detail-band">
        <div className="auto-container all-detail-pg">
          <h2 className="fade-text hidden2" style={{ margin: "-3vh 0 5vh 10vw", color: "#35412a" }}>
            <b>WELCOME TO NURADHA FAMILY</b>
          </h2>

          <div className="sec-title text-center" />

          <section className="about-slide-gallery hidden2">
            <div className="gallery-header">
              <h3>
                <b>INSIDE NURADHA ENGINEERING</b>
              </h3>
              <p>A moving look at the people, craft, and work behind our story.</p>
            </div>
            <div style={{ position: "relative" }}>
              <div className="about-slide-fade left" />
              <div className="about-slide-fade right" />
              <div className="about-slide-marquee">
                <div className="about-slide-track">
                  {aboutSlides.map((slide) => (
                    <div className="about-slide-card" key={slide}>
                      <img src={slide} alt="Nuradha Engineering about gallery view" />
                    </div>
                  ))}
                </div>
                <div className="about-slide-track" aria-hidden="true">
                  {aboutSlides.map((slide) => (
                    <div className="about-slide-card" key={`${slide}-dup`}>
                      <img src={slide} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mb-3 hidden2" style={{ backgroundColor: "#1b251b", padding: "4vh", margin: "0 10vw" }}>
            <div className="auto-container sub-prod-head-1">
              <div className="wrapper-box light-header" style={{ textAlign: "center" }}>
                <h2 style={{ color: "#dedee0", fontFamily: "'Font Awesome 5 Brands'" }}>
                  <b>WHO WE ARE ?</b>
                </h2>
              </div>
            </div>
          </section>

          <div className="col mt-5">
            <div>
              <div className="all-about col-lg-10 d-flex justify-content-center" style={{ marginLeft: "8vw" }}>
                <div className="col">
                  <div className="text abt-nuradha" style={{ width: "80vw", textAlign: "justify" }}>
                    <div className="hidden2">
                      <p>
                        The inception of Nuradha Engineering start in 1989 as a company producing equipment for small fishing boats in a small production factory. It all started as a small family business from the family of the Late MR. R. Danthanarayana.
                      </p>
                      <p>
                        As of today, we produce and deliver our equipment for commercial fishing boats for commercial fishing companies with international standards; with the help of a very talented and experienced set of staff, using new equipment.
                      </p>
                      <p>
                        We are the main Sri Lankan supplier of fishing haulers and equipment for commercial fishing boats exported to overseas markets within the commercial fishing industry. Our customers are commercial fishing companies owning boats, especially in the overseas markets looking for commercial fishing haulers and equipment/ supplies.
                      </p>
                      <p>
                        We are proud to say we are the main player in this market, and we are suppliers of commercial fishing equipment to countries like Seychelles, Mauritius, Kenya, Pakistan, Maldives, and so on.
                      </p>
                    </div>

                    <br />

                    <h5 className="hidden2" style={{ color: "black" }}>
                      <b>OUR USPs TO CLIENTS ARE</b>
                    </h5>

                    <ul className="data-ul hidden2 about-tick-list">
                      <li>Exceptional service quality provided</li>
                      <li>Value for money</li>
                      <li>Commitment to customer satisfaction</li>
                    </ul>

                    <div className="hidden2">
                      <p>
                        Our offering includes all the equipment necessary for fishing boats such as fishing equipment, fishing haulers, and fishing winches, which are produced in our factory using the highest quality raw materials and technology. We are able to produce equipment to satisfy varying requirements for a broad set of customers inclusive of global commercial fishing companies, and we customize as and when necessary to suit customer requirements.
                      </p>
                      <p>
                        Also, we undertake the distribution of very high-quality hydraulic pumps, motors, equipment, and seals up to international standards.
                      </p>
                      <p>
                        We have gone a step further in our efforts to delight our customers, where we supply marine engines to the market as well from Nuradha Engineering, you are free to purchase different types of these engines to satisfy your requirement and benefit from our exceptional service.
                      </p>
                    </div>

                    <br />

                    <h5 className="hidden2" style={{ color: "black" }}>
                      <b>WE ARE THE REGIONAL MARKET LEADER IN</b>
                    </h5>

                    <ul className="data-ul hidden2 about-tick-list">
                      <li>Marine solutions/ marine haulers</li>
                      <li>Hydraulic solutions/ hydraulic haulers</li>
                      <li>Sealing solutions</li>
                    </ul>

                    <br />

                    <h5 className="hidden2 about-brand-heading" style={{ color: "black" }}>
                      <b>WE HAVE A BROAD PRODUCT PORTFOLIO MANUFACTURED UNDER OUR OWN REPUTED BRAND</b>
                      <img src="/assets/images/logo1.png" alt="Blue Thunder Fishing Gear logo" />
                      <b>SOME OF THESE ARE LISTED BELLOW</b>
                    </h5>

                    <ul className="data-ul hidden2 about-tick-list">
                      <li className="blue-thunder-img" style={{ position: "absolute", marginLeft: "-20vw", marginTop: "5vh" }}>
                        <img src="/assets/images/logo1.png" alt="Blue Thunder Fishing Gear logo" style={{ width: "18vw" }} />
                      </li>
                      <li>Tuna Longline hauler</li>
                      <li>Pot hauler</li>
                      <li>Purse seine winch</li>
                      <li>Combined net & pot hauler</li>
                      <li>Net hauler</li>
                      <li>Manual & Hydraulic Line Hauler</li>
                    </ul>

                    <div className="about-product-grid hidden2">
                      {products.map((product) => (
                        <div className="about-product-card" key={product.title}>
                          <img src={product.src} alt={product.alt} />
                          <h6>{product.title}</h6>
                        </div>
                      ))}
                    </div>

                    <div className="hidden2">
                      <p>
                        We provide haulers and winches for medium and small-scale commercial fishing boats sized 45 feet - 65 feet in length. We also manufacture commercial fishing equipment as per our client's requirements.
                      </p>
                    </div>

                    <br />
                    <br />

                    <section className="mb-3 hidden2" style={{ backgroundColor: "#1b251b", padding: "4vh", margin: "0" }}>
                      <div className="auto-container sub-prod-head-1">
                        <div className="wrapper-box light-header" style={{ textAlign: "center" }}>
                          <h2 style={{ color: "#dedee0", fontFamily: "'Font Awesome 5 Brands'" }}>
                            <b>OUR TEAM</b>
                          </h2>
                        </div>
                      </div>
                    </section>

                    <div className="hidden2">
                      <p className="mt-5">
                        Our team consists of around 25 skilled and qualified workers. Our expertise gained in the commercial fishing industry equipment is unmatched by any other organization in Sri Lanka and has proven to be successful among global fishing companies in South Asia.
                        <br />
                        <br />
                        We are looking forward to servicing our global clientele with the highest quality equipment meeting international standards with exceptional customer service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="carouselExampleControls" className="carousel slide review-slide-main mb-5" data-ride="carousel">
        <div className="carousel-inner review-slider-all">
          <section className="mb-3" style={{ backgroundColor: "#1b251b", padding: "4vh", margin: 0 }}>
            <div className="auto-container sub-prod-head-1">
              <div className="wrapper-box light-header" style={{ textAlign: "center" }}>
                <h2 style={{ color: "#dedee0", fontFamily: "'Font Awesome 5 Brands'" }}>
                  <b>CUSTOMER REVIEWS</b>
                </h2>
              </div>
            </div>
          </section>

          {reviews.map((review, index) => (
            <div className={`carousel-item${index === 0 ? " active" : ""}`} key={review.name}>
              <div className="row">
                <div className="container mt-3 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-2">
                          <img src={review.src} alt={review.alt} className="img img-rounded img-fluid" />
                        </div>
                        <div className="col-md-10 review-content mt-3">
                          <h5>{review.name}</h5>
                          <p>
                            <strong>
                              {review.roleLines.map((line, lineIndex) => (
                                <span key={`${review.name}-${lineIndex}`}>
                                  {line}
                                  <br />
                                </span>
                              ))}
                            </strong>
                          </p>
                          <div className="clearfix" />
                          <p className="pt-2">{review.text}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" style={{ backgroundColor: "black" }} />
          <span className="sr-only">Previous</span>
        </a>

        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" style={{ backgroundColor: "black" }} />
          <span className="sr-only">Next</span>
        </a>
      </div>

      <section className="about-vision-section">
        <div className="auto-container">
          <div className="col-lg-10" style={{ minWidth: "98vw" }}>
            <div className="col-lg-12" style={{ textAlign: "center" }}>
              <h2 className="font-weight-bold" style={{ color: "white", padding: "3vh 0 4vh 0" }}>
                OUR VISION
              </h2>
              <div className="text-2 our-vision hidden2 vision-text">
                "To be the benchmark in the commercial fishing industry renowned for exceptional service. To be recognized for our contributions to client companies, the professionalism maintained, and our human qualities."
              </div>
            </div>
            <div className="col-lg-12" style={{ textAlign: "center" }}>
              <h2 className="font-weight-bold" style={{ color: "white", padding: "6vh 0 3vh 0" }}>
                OUR MISSION
              </h2>
              <div className="text-2 our-mission hidden2 vision-text">
                "Our mission is to exceed customer satisfaction. We work together with our clients to create long-term relationships in order to provide the best possible service within the boat industry. Our aim is to build our reputation over time for consistent performance and exceptional service."
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
