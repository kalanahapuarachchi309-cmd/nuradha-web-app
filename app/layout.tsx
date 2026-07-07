import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";

import PageEffects from "../components/PageEffects";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nuradha",
  description: "Nuradha website converted to Next.js.",
  icons: {
    icon: "/assets/images/favicon.png",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/assets/css/bootstrap.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <link rel="stylesheet" href="/assets/css/color.css" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="app-shell">{children}</div>
        <PageEffects />
        <Script src="/assets/js/jquery.js" strategy="afterInteractive" />
        <Script src="/assets/js/popper.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/bootstrap-select.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.fancybox.js" strategy="afterInteractive" />
        <Script src="/assets/js/isotope.js" strategy="afterInteractive" />
        <Script src="/assets/js/owl.js" strategy="afterInteractive" />
        <Script src="/assets/js/appear.js" strategy="afterInteractive" />
        <Script src="/assets/js/wow.js" strategy="afterInteractive" />
        <Script src="/assets/js/lazyload.js" strategy="afterInteractive" />
        <Script src="/assets/js/scrollbar.js" strategy="afterInteractive" />
        <Script src="/assets/js/TweenMax.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/swiper.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.polyglot.language.switcher.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.ajaxchimp.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/parallax-scroll.js" strategy="afterInteractive" />
        <Script src="/assets/js/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
