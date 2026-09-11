import type { MetadataRoute } from "next";
import { getAllProducts, slugify } from "./products/utils";

const BASE_URL = "https://www.medicosmoformulations.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${BASE_URL}/about-us`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/products`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/contact-us`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];

    const productPages: MetadataRoute.Sitemap = getAllProducts().map(
        (product) => ({
            url: `${BASE_URL}/products/${slugify(product.name)}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        })
    );

    return [...staticPages, ...productPages];
}