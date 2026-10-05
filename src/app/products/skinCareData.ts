/**
 * Centralized Skin Care Products Data
 * =======================================================
 * Medicosmo Formulations Private Limited
 *
 * HOW TO EDIT PRODUCT DETAILS:
 * ----------------------------
 * To update the active ingredients, benefits, technical specifications,
 * or formulations for any skin care product, simply edit the `description`
 * field for that product below.
 *
 * Currently, all skin care products use the editable placeholder:
 *   "Enter detail here"
 *
 * Each product object manages:
 * - id: unique numeric identifier
 * - name: the full display name (matches Products page card)
 * - slug: URL-friendly slug for the product details page
 * - category: category badge text ("Skin Care")
 * - description: active formulation / ingredients text (placeholder)
 * - img: product card image path
 * - aliases: optional alternate slugs for backwards compatibility
 * =======================================================
 */

export interface SkinCareProduct {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  img: string;
  aliases?: string[];
}

export const skinCareProducts: SkinCareProduct[] = [
  {
    id: 2001,
    name: "Skin Cream",
    slug: "skin-cream",
    category: "Skin Care",
    description: "Nourishing & Hydrating Formula for Soft, Smooth and Healthy-Looking Skin.",
    img: "/1.jpg",
    aliases: ["creams", "skin-creams"],
  },
  {
    id: 2002,
    name: "Body Lotion",
    slug: "body-lotion",
    category: "Skin Care",
    description: "Rich Moisturizing Formula for Lasting Hydration, Skin Softness and Smoothness.",
    img: "/11.jpg",
    aliases: ["lotions", "body-lotions"],
  },
  {
    id: 2003,
    name: "Skin Serum",
    slug: "skin-serum",
    category: "Skin Care",
    description: "Hydrating & Brightening Skin Serum for a Smooth, Radiant Glow.",
    img: "/12.jpg",
    aliases: ["skin-serums", "serums"],
  },
  {
    id: 2004,
    name: "Skin Gel",
    slug: "skin-gel",
    category: "Skin Care",
    description: "Refreshing & Hydrating Skin Gel for a Cool, Smooth and Fresh Feel",
    img: "/28.png",
    aliases: ["gels", "skin-gels"],
  },
  {
    id: 2005,
    name: "Skin Toner",
    slug: "skin-toner",
    category: "Skin Care",
    description: "Refreshing & Balancing Skin Toner for a Clean, Fresh and Refined Feel",
    img: "/13.jpg",
    aliases: ["skin-toners", "toner", "toners"],
  },
  {
    id: 2006,
    name: "Boba Cream",
    slug: "boba-cream",
    category: "Skin Care",
    description: "Nourishing & Hydrating Boba Cream for Soft, Smooth and Radiant Skin",
    img: "/1.jpg",
    aliases: [],
  },
  {
    id: 2007,
    name: "Face Gel",
    slug: "face-gel",
    category: "Skin Care",
    description: "Refreshing & Hydrating Face Gel for Soft, Smooth and Fresh-Looking Skin",
    img: "/1.jpg",
    aliases: ["face-gels"],
  },
  {
    id: 2008,
    name: "Face Cleanser",
    slug: "face-cleanser",
    category: "Skin Care",
    description: "Gentle Cleansing & Refreshing Face Cleanser for Clean, Soft and Fresh-Looking Skin",
    img: "/24.jpg",
    aliases: ["face-cleansers", "cleansers", "face-wash"],
  },
  {
    id: 2009,
    name: "Shower Gel & Body Wash",
    slug: "shower-gel-and-body-wash",
    category: "Skin Care",
    description: "Refreshing & Cleansing Formula for Soft, Smooth and Fresh-Looking Skin",
    img: "/4.jpg",
    aliases: ["shower-gel-body-wash", "shower-gel", "body-wash"],
  },
  {
    id: 2010,
    name: "Intimate Care",
    slug: "intimate-care",
    category: "Skin Care",
    description: "Gentle & Refreshing Intimate Care for Clean, Fresh and Comfortable Skin",
    img: "/22.jpg",
    aliases: ["intimate-wash"],
  },
  {
    id: 2011,
    name: "Hand Wash",
    slug: "hand-wash",
    category: "Skin Care",
    description: "Enter detail here",
    img: "/6.jpg",
    aliases: ["handwash"],
  },
  {
    id: 2012,
    name: "Sun Cream",
    slug: "sun-cream",
    category: "Skin Care",
    description: "Enter detail here",
    img: "/26.jpg",
    aliases: ["sun-care", "sunscreen", "sun-screen"],
  },
  {
    id: 2013,
    name: "Baby Care",
    slug: "baby-care",
    category: "Skin Care",
    description: "Enter detail here",
    img: "/19.jpg",
    aliases: ["baby-care-products"],
  },
  {
    id: 2014,
    name: "Scrubs & Pack",
    slug: "scrubs-and-pack",
    category: "Skin Care",
    description: "Enter detail here",
    img: "/21.jpg",
    aliases: ["scrubs-pack", "scrubs-and-packs", "scrubs-packs", "scrubs"],
  },
  {
    id: 2015,
    name: "Under Eye",
    slug: "under-eye",
    category: "Skin Care",
    description: "Enter detail here",
    img: "/27.jpg",
    aliases: ["under-eye-cream", "under-eye-and-lip-care"],
  },
];
