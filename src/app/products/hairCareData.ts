/**
 * Centralized Hair Care Products Data
 * =======================================================
 * Medicosmo Formulations Private Limited
 *
 * HOW TO EDIT PRODUCT DETAILS:
 * ----------------------------
 * To update the active ingredients, benefits, technical specifications,
 * or formulations for any hair care product, simply edit the `description`
 * field for that product below.
 *
 * Currently, all hair care products use the editable placeholder:
 *   "Enter detail here"
 *
 * Each product object manages:
 * - id: unique numeric identifier
 * - name: the full display name (matches Products page card)
 * - slug: URL-friendly slug for the product details page
 * - category: category badge text ("Hair Care")
 * - description: active formulation / ingredients text (placeholder)
 * - img: product card image path
 * - aliases: optional alternate slugs for backwards compatibility
 * =======================================================
 */

export interface HairCareProduct {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  img: string;
  aliases?: string[];
}

export const hairCareProducts: HairCareProduct[] = [
  {
    id: 1001,
    name: "Hair Conditioner",
    slug: "hair-conditioner",
    category: "Hair Care",
    description: "Deeply Nourishing & Hydrating Formula for Soft, Smooth, Frizz-Free and Healthy Hair.",
    img: "/10.jpg",
    aliases: ["conditioner"],
  },
  {
    id: 1002,
    name: "Hair Spa",
    slug: "hair-spa",
    category: "Hair Care",
    description: "Deeply Moisturizing & Nourishing Formula for Hair Repair, Frizz Control, Softness, Volume and Shine.",
    img: "/23.jpg",
    aliases: ["hair-masque-and-spa", "hair-masque-spa"],
  },
  {
    id: 1003,
    name: "Anti Hair Fall Treatment",
    slug: "anti-hair-fall-treatment",
    category: "Hair Care",
    description: "Strengthening & Nourishing Formula to Reduce Hair Fall, Improve Hair Thickness and Promote Hair Growth.",
    img: "/15.jpg",
    aliases: [],
  },
  {
    id: 1004,
    name: "Anti Dandruff Treatment",
    slug: "anti-dandruff-treatment",
    category: "Hair Care",
    description: "Enter detail here",
    img: "/22.jpg",
    aliases: [],
  },
  {
    id: 1005,
    name: "Hair Shampoo",
    slug: "hair-shampoo",
    category: "Hair Care",
    description: "Gentle Cleansing & Nourishing Formula for Healthy, Soft and Shiny Hair",
    img: "/10.jpg",
    aliases: ["shampoo"],
  },
  {
    id: 1006,
    name: "Hair Mask",
    slug: "hair-mask",
    category: "Hair Care",
    description: "Deep Conditioning & Nourishing Hydrating Formula for Soft, Smooth and Shiny Hair.",
    img: "/20.jpg",
    aliases: ["hair-masks"],
  },
  {
    id: 1007,
    name: "Hair Serum",
    slug: "hair-serum",
    category: "Hair Care",
    description: "Lightweight & Nourishing Formula for Frizz Control, Smoothness, Shine and Hair Protection.",
    img: "/12.jpg",
    aliases: [],
  },
  {
    id: 1008,
    name: "Hair Gel",
    slug: "hair-gel",
    category: "Hair Care",
    description: "Strong Hold & Long-Lasting Styling Hair Gel",
    img: "/27.jpg",
    aliases: ["hair-styling-gel"],
  },
  {
    id: 1009,
    name: "Alcohol-Free Hair & Body Mist",
    slug: "alcohol-free-hair-and-body-mist",
    category: "Hair Care",
    description: "Refreshing, Non-Drying Formula for Hydrated Skin & Hair.",
    img: "/13.jpg",
    aliases: ["hair-and-body-mist", "alcohol-free-hair-and-body-mists"],
  },
  {
    id: 1010,
    name: "Keratin Hair Treatment",
    slug: "keratin-hair-treatment",
    category: "Hair Care",
    description: "Enter detail here",
    img: "/17.jpg",
    aliases: [],
  },
  {
    id: 1011,
    name: "Hair Botox Treatment",
    slug: "hair-botox-treatment",
    category: "Hair Care",
    description: "Enter detail here",
    img: "/16.jpg",
    aliases: [],
  },
];
