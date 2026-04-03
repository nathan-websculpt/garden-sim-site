import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type CanonicalPath = "/" | `/${string}`;

type PageMetadataInput = {
  title: string;
  description: string;
  canonicalPath: CanonicalPath;
  ogImageAlt: string;
  openGraphTitle?: string;
  twitterTitle?: string;
};

export function buildPageMetadata({
  title,
  description,
  canonicalPath,
  ogImageAlt,
  openGraphTitle,
  twitterTitle,
}: PageMetadataInput): Metadata {
  const resolvedOpenGraphTitle = openGraphTitle ?? `${title} | ${siteConfig.name}`;
  const resolvedTwitterTitle = twitterTitle ?? resolvedOpenGraphTitle;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: resolvedOpenGraphTitle,
      description,
      url: canonicalPath,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTwitterTitle,
      description,
      images: [siteConfig.ogImage],
    },
  };
}
