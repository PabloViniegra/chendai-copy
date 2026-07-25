import type { MetadataRoute } from "next";

const SITE_URL = "https://chanhdai.com";

const STATIC_ROUTES = [
  "/",
  "/blocks",
  "/blog",
  "/components",
  "/sponsors",
  "/testimonials",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return STATIC_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
