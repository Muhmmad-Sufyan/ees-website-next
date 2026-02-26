import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "EHYA Education Services",
    template: "%s | EHYA Education Services",
  },
  description:
    "To redefine and realign the meaning, purpose and methodology of education in Islamic paradigm.",
  icons: {
    icon: "/assets/img/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.css" />
        <link rel="stylesheet" href="/assets/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
      </head>
      <body>
        <Script
          src="/assets/js/popper.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/js/bootstrap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/wow.js"
          strategy="afterInteractive"
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
