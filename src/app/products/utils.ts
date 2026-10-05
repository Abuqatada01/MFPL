import { products } from "./data";
import { hairCareProducts, HairCareProduct } from "./hairCareData";
import { skinCareProducts, SkinCareProduct } from "./skinCareData";
import { cosmeticProducts, CosmeticProduct } from "./cosmeticsData";

export interface Product {
  id: number | string;
  name: string;
  description: string;
  category: string;
  img: string;
  slug?: string;
  aliases?: string[];
}

export { hairCareProducts, skinCareProducts, cosmeticProducts };
export type { HairCareProduct, SkinCareProduct, CosmeticProduct };

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
 * Prioritizes centralized Hair Care, Skin Care, and Cosmetic products first, then other products from data.ts.
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

  // 2. Check centralized Skin Care products (by slug, slugified name, or alias)
  const skinProduct = skinCareProducts.find(
    (p) =>
      p.slug === normalizedSlug ||
      slugify(p.name) === normalizedSlug ||
      (p.aliases && p.aliases.includes(normalizedSlug))
  );
  if (skinProduct) {
    return skinProduct;
  }

  // 3. Check centralized Cosmetic products (by slug, slugified name, or alias)
  const cosmeticProduct = cosmeticProducts.find(
    (p) =>
      p.slug === normalizedSlug ||
      slugify(p.name) === normalizedSlug ||
      (p.aliases && p.aliases.includes(normalizedSlug))
  );
  if (cosmeticProduct) {
    return cosmeticProduct;
  }

  // 4. Check general products in data.ts
  return (products as Product[]).find((p) => slugify(p.name) === normalizedSlug);
}

/**
 * Returns all products for static path generation.
 * Integrates hairCareProducts, skinCareProducts, cosmeticProducts, and other unique products from data.ts.
 */
export function getAllProducts(): Product[] {
  const centralizedSlugs = new Set([
    ...hairCareProducts.flatMap((p) => [
      p.slug,
      slugify(p.name),
      ...(p.aliases || []),
    ]),
    ...skinCareProducts.flatMap((p) => [
      p.slug,
      slugify(p.name),
      ...(p.aliases || []),
    ]),
    ...cosmeticProducts.flatMap((p) => [
      p.slug,
      slugify(p.name),
      ...(p.aliases || []),
    ]),
  ]);

  // Keep other products that aren't replaced by centralized products
  const otherProducts = (products as Product[]).filter(
    (p) => !centralizedSlugs.has(slugify(p.name))
  );

  return [
    ...hairCareProducts,
    ...skinCareProducts,
    ...cosmeticProducts,
    ...otherProducts,
  ];
}

