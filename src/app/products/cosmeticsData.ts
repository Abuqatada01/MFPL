/**
 * Centralized Cosmetics Products Data
 * =======================================================
 * Medicosmo Formulations Private Limited
 *
 * HOW TO EDIT PRODUCT DETAILS:
 * ----------------------------
 * To update the active ingredients, benefits, technical specifications,
 * or formulations for any cosmetic product, simply edit the `description`
 * field for that product below.
 *
 * Currently, all cosmetic products use the editable placeholder:
 *   "Enter detail here"
 *
 * Each product object manages:
 * - id: unique numeric identifier
 * - name: the full display name (matches Products page card)
 * - slug: URL-friendly slug for the product details page
 * - category: category badge text ("Cosmetics")
 * - description: active formulation / ingredients text (placeholder)
 * - img: product card image path
 * - aliases: optional alternate slugs for backwards compatibility
 * =======================================================
 */

export interface CosmeticProduct {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  img: string;
  aliases?: string[];
}

export const cosmeticProducts: CosmeticProduct[] = [
  {
    id: 3001,
    name: "Lip Care",
    slug: "lip-care",
    category: "Cosmetics",
    description: "Nourishing & Moisturizing Care for Soft, Smooth and Healthy-Looking Lips",
    img: "/29.jpg",
    aliases: ["lip-care-products", "lip-balm", "lipcare"],
  },
  {
    id: 3002,
    name: "Men's Grooming",
    slug: "mens-grooming",
    category: "Cosmetics",
    description: "Refreshing & Nourishing Care for Clean, Smooth and Well-Groomed Skin",
    img: "/18.jpg",
    aliases: ["mens-grooming-products", "men-grooming"],
  },
];
