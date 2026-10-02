import { products } from "./data";
import { hairCareProducts, HairCareProduct } from "./hairCareData";

export interface Product {
  id: number | string;
  name: string;
  description: string;
  category: string;
  img: string;
  slug?: string;
  aliases?: string[];
}

export { hairCareProducts };
export type { HairCareProduct };

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
 * Finds a product by its generated URL slug.
 * Prioritizes centralized Hair Care products first, then other products from data.ts.
 */
export function getProductBySlug(slug: string): Product | undefined {
  if (!slug) return undefined;
  const normalizedSlug = slug.toLowerCase().trim();

  // 1. Check centralized Hair Care products (by slug, slugified name, or alias)
  const hairProduct = hairCareProducts.find(
    (p) =>
      p.slug === normalizedSlug ||
      slugify(p.name) === normalizedSlug ||
      (p.aliases && p.aliases.includes(normalizedSlug))
  );
  if (hairProduct) {
    return hairProduct;
  }

  // 2. Check general products in data.ts
  return (products as Product[]).find((p) => slugify(p.name) === normalizedSlug);
}

/**
 * Returns all products for static path generation.
 * Integrates hairCareProducts and other unique products from data.ts.
 */
export function getAllProducts(): Product[] {
  const hairCareSlugs = new Set(
    hairCareProducts.flatMap((p) => [
      p.slug,
      slugify(p.name),
      ...(p.aliases || []),
    ])
  );

  // Keep other products that aren't replaced by hairCareProducts
  const otherProducts = (products as Product[]).filter(
    (p) => !hairCareSlugs.has(slugify(p.name))
  );

  return [...hairCareProducts, ...otherProducts];
}

