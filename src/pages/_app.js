// pages/_app.js
import "@/styles/globals.css";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

const DEFAULT_SEO = {
  title: "Moyosore O.F | Senior Shopify Website Designer",
  description:
    "Senior Shopify Website Designer with high sales conversion. Building standard, conversion-optimized, and visually stunning Shopify online stores.",
  openGraph: {
    type: "website",
    url: "https://praise-oluwasakin-website.vercel.app/",
    title: "Moyosore O.F | Senior Shopify Website Designer",
    description:
      "Senior Shopify Website Designer with high sales conversion. Building standard, conversion-optimized, and visually stunning Shopify online stores.",
    images: [
      {
        url: "https://praise-oluwasakin-website.vercel.app/Moyosore-potrait.webp",
        width: 1200,
        height: 630,
        alt: "Moyosore O.F Portfolio Preview",
      },
    ],
    site_name: "Moyosore O.F Portfolio",
  },
  twitter: {
    cardType: "summary_large_image",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Moyosore O.F (Oluwasakin Favour)",
              url: "https://praise-oluwasakin-website.vercel.app/",
              sameAs: [
                "https://www.upwork.com/freelancers/~01e48c9f09f436ce0e",
                "https://www.instagram.com/ijobamoyo",
                "https://www.tiktok.com/@oluwangh44g",
                "https://www.linkedin.com/in/moyosore-oluwasakin-11a96330b",
              ],
              jobTitle: "Senior Shopify Website Designer",
            }),
          }}
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
