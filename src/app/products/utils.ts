import { products } from "./data";

export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  img: string;
}

/**
 * Converts a string into a clean, URL-safe slug.
 * Example:
 *   "Skin Brightening Cream" -> "skin-brightening-cream"
 *   "Hair & Body Mist" -> "hair-and-body-mist"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/**
 * Finds a product from data.ts by its generated URL slug.
 */
export function getProductBySlug(slug: string): Product | undefined {
  return (products as Product[]).find((p) => slugify(p.name) === slug);
}

/**
 * Returns all products for static path generation.
 */
export function getAllProducts(): Product[] {
  return products as Product[];
}
