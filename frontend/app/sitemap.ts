import type { MetadataRoute } from "next";

const baseUrl = "https://frontwebtech.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/about", "/services", "/product", "/portfolio", "/contact"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8
  }));
}
