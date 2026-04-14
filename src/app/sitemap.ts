import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog";

const BASE_URL = "https://kvetinynadmuseem.cz";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/obchod`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/obchod/darkove-kytice`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/obchod/smutecni-vazby`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/obchod/pokojove-rostliny`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/svatby`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/o-nas`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/kontakt`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/rozvoz`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/doporuceni`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/blog`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/obchodni-podminky`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/ochrana-osobnich-udaju`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/reklamace`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...blogRoutes];
}
