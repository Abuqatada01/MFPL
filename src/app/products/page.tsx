"use client";
import "./products.css";
import Image from "next/image";
import { ArrowUpRightIcon, HeartIcon } from "@phosphor-icons/react";
import Link from "next/link";

export const products = [
  /* ===================== CREAMS ===================== */
  {
    id: 1,
    name: "Skin Brightening Cream",
    description: "Alpha Arbutin + Vitamin C",
    category: "Creams",
    img: "/products/cream.png",
  },
  {
    id: 2,
    name: "Acne Control Cream",
    description: "Salicylic Acid + Niacinamide",
    category: "Creams",
    img: "/products/cream.png",
  },
  {
    id: 3,
    name: "Gentle Exfoliating Cream",
    description: "Glycolic Acid + Lactic Acid",
    category: "Creams",
    img: "/products/cream.png",
  },
  {
    id: 4,
    name: "Soothing & Calming Cream",
    description: "Aloe Vera + Jojoba Oil",
    category: "Creams",
    img: "/products/cream.png",
  },
  {
    id: 5,
    name: "Softening & Repair Cream",
    description: "Cocoa Butter + Almond Oil",
    category: "Creams",
    img: "/products/cream.png",
  },
  {
    id: 6,
    name: "Barrier Repair Cream",
    description: "Tranexamic Acid + Ceramide",
    category: "Creams",
    img: "/products/cream.png",
  },
  {
    id: 7,
    name: "Deep Nourishing Cream",
    description: "Peptides + Shea Butter",
    category: "Creams",
    img: "/products/cream.png",
  },
  {
    id: 8,
    name: "Even Tone & Glow Cream",
    description: "Kojic Acid + Glutathione",
    category: "Creams",
    img: "/products/cream.png",
  },
  {
    id: 9,
    name: "Ultra Hydration Cream",
    description: "Hyaluronic Acid + Ceramides",
    category: "Creams",
    img: "/products/cream.png",
  },
  {
    id: 10,
    name: "Anti-Aging Night Cream",
    description: "Retinol + Squalane",
    category: "Creams",
    img: "/products/cream.png",
  },
  {
    id: 11,
    name: "Protective Day Cream",
    description: "Niacinamide + Vitamin E",
    category: "Creams",
    img: "/products/cream.png",
  },
  {
    id: 12,
    name: "Glow & Hydration Cream",
    description: "Hyaluronic Acid + Vitamin C",
    category: "Creams",
    img: "/products/cream.png",
  },

  /* ===================== GELS ===================== */
  {
    id: 13,
    name: "Skin Brightening Gel",
    description: "Vitamin C + Alpha Arbutin",
    category: "Gels",
    img: "/products/gel.png",
  },
  {
    id: 14,
    name: "Oil Control Gel",
    description: "Salicylic Acid + Niacinamide",
    category: "Gels",
    img: "/products/gel.png",
  },
  {
    id: 15,
    name: "After Shave Soothing Gel",
    description: "Aloe Vera + Neem",
    category: "Gels",
    img: "/products/gel.png",
  },
  {
    id: 16,
    name: "Deep Moisturising Gel",
    description: "Hyaluronic Acid + Licorice Extract",
    category: "Gels",
    img: "/products/gel.png",
  },
  {
    id: 17,
    name: "De-pigmentation Gel",
    description: "Alpha Arbutin + Niacinamide",
    category: "Gels",
    img: "/products/gel.png",
  },
  {
    id: 18,
    name: "Anti-Aging Gel",
    description: "Peptides + Retinol",
    category: "Gels",
    img: "/products/gel.png",
  },
  {
    id: 19,
    name: "Skin Massage Gel",
    description: "Eucalyptus Oil + Menthol",
    category: "Gels",
    img: "/products/gel.png",
  },
  {
    id: 20,
    name: "Non-Foaming Shaving Gel",
    description: "Aloe Vera + D-Panthenol + Allantoin",
    category: "Gels",
    img: "/products/gel.png",
  },
  {
    id: 21,
    name: "Hair Styling Gel",
    description: "D-Panthenol + Caffeine + Green Tea",
    category: "Gels",
    img: "/products/gel.png",
  },
  {
    id: 22,
    name: "Mild Exfoliating Gel",
    description: "Lactic Acid + Allantoin + Walnut Shell Powder",
    category: "Gels",
    img: "/products/gel.png",
  },

  /* ===================== SKIN SERUMS ===================== */
  {
    id: 23,
    name: "Deep Hydration Serum",
    description: "Hyaluronic Acid + Squalane",
    category: "Skin Serums",
    img: "/products/serum.png",
  },
  {
    id: 24,
    name: "Skin Brightening Serum",
    description: "Vitamin C + Alpha Arbutin",
    category: "Skin Serums",
    img: "/products/serum.png",
  },
  {
    id: 25,
    name: "Anti-Aging & Skin Firming Serum",
    description: "Ceramides + Peptides",
    category: "Skin Serums",
    img: "/products/serum.png",
  },
  {
    id: 26,
    name: "Acne / Oil Control Serum",
    description: "Salicylic Acid + Niacinamide",
    category: "Skin Serums",
    img: "/products/serum.png",
  },
  {
    id: 27,
    name: "Exfoliating Radiance Serum",
    description: "Glycolic Acid + Kojic Acid",
    category: "Skin Serums",
    img: "/products/serum.png",
  },
  {
    id: 28,
    name: "Redness & Rosacea-Calming Serum",
    description: "Azelaic Acid + Niacinamide",
    category: "Skin Serums",
    img: "/products/serum.png",
  },
  {
    id: 29,
    name: "Hyperpigmentation Serum",
    description: "Tranexamic Acid + Alpha Arbutin",
    category: "Skin Serums",
    img: "/products/serum.png",
  },
  {
    id: 30,
    name: "Brightening Serum for Sensitive Skin",
    description: "Peptides + Tranexamic Acid",
    category: "Skin Serums",
    img: "/products/serum.png",
  },
  {
    id: 31,
    name: "Texture Refining Serum",
    description: "Glycolic Acid + Niacinamide",
    category: "Skin Serums",
    img: "/products/serum.png",
  },
  {
    id: 32,
    name: "Anti-Acne & Brightening Serum",
    description: "Azelaic Acid + Kojic Acid",
    category: "Skin Serums",
    img: "/products/serum.png",
  },
  {
    id: 33,
    name: "Anti-Aging & Hydration Serum",
    description: "Retinol + Hyaluronic Acid",
    category: "Skin Serums",
    img: "/products/serum.png",
  },
  {
    id: 34,
    name: "Pore-Minimizing & Glow Serum",
    description: "Niacinamide + Vitamin C",
    category: "Skin Serums",
    img: "/products/serum.png",
  },

  /* ===================== LOTIONS ===================== */
  {
    id: 35,
    name: "Skin Tone Correction Lotion",
    description: "Vitamin C + Glutathione",
    category: "Lotions",
    img: "/products/lotion.png",
  },
  {
    id: 36,
    name: "Deep Hydration & Skin Barrier Repair Lotion",
    description: "Hyaluronic Acid + Ceramides",
    category: "Lotions",
    img: "/products/lotion.png",
  },
  {
    id: 37,
    name: "Intense Moisturization & Barrier Support Lotion",
    description: "Shea Butter + Squalane",
    category: "Lotions",
    img: "/products/lotion.png",
  },
  {
    id: 38,
    name: "Nourishing Body Lotion for Dry Skin",
    description: "Mango Butter + Jojoba Oil",
    category: "Lotions",
    img: "/products/lotion.png",
  },
  {
    id: 39,
    name: "Skin Renewed & Oil Control Lotion",
    description: "Glycolic Acid + Niacinamide",
    category: "Lotions",
    img: "/products/lotion.png",
  },
  {
    id: 40,
    name: "Anti-Oxidant Body Lotion",
    description: "Cocoa Butter + Vitamin E",
    category: "Lotions",
    img: "/products/lotion.png",
  },
  {
    id: 41,
    name: "Dual-Action Pigmentation Control Night Lotion",
    description: "Alpha Arbutin + Kojic Acid",
    category: "Lotions",
    img: "/products/lotion.png",
  },
  {
    id: 42,
    name: "Calming & Brightening Daily Use Lotion",
    description: "Aloe Vera + Niacinamide",
    category: "Lotions",
    img: "/products/lotion.png",
  },
  {
    id: 43,
    name: "Glow & Skin Barrier Support Lotion",
    description: "Vitamin C + Squalane",
    category: "Lotions",
    img: "/products/lotion.png",
  },
  {
    id: 44,
    name: "Hydrated Glow Day Lotion",
    description: "Vitamin C + Hyaluronic Acid",
    category: "Lotions",
    img: "/products/lotion.png",
  },

  /* ===================== HAIR CONDITIONERS ===================== */
  {
    id: 45,
    name: "Frizz Control & Detangling Hair Conditioner",
    description: "Keratin + Protein + Argan Oil",
    category: "Hair Conditioners",
    img: "/products/conditioner.png",
  },
  {
    id: 46,
    name: "Deep Nourishing Hair Conditioner",
    description: "Avocado Oil + Vitamin E",
    category: "Hair Conditioners",
    img: "/products/conditioner.png",
  },
  {
    id: 47,
    name: "HydraLock Hair Conditioner",
    description: "Jojoba Oil + Shea Butter",
    category: "Hair Conditioners",
    img: "/products/conditioner.png",
  },
  {
    id: 48,
    name: "Soft Balance Hair Conditioner",
    description: "Almond Oil + Vitamin E",
    category: "Hair Conditioners",
    img: "/products/conditioner.png",
  },
  {
    id: 49,
    name: "Strength & Repair Hair Conditioner",
    description: "Keratin + Baobab Protein",
    category: "Hair Conditioners",
    img: "/products/conditioner.png",
  },
  {
    id: 50,
    name: "Damage Repair Hair Conditioner",
    description: "Peptides",
    category: "Hair Conditioners",
    img: "/products/conditioner.png",
  },
  {
    id: 51,
    name: "Shine & Strength Hair Conditioner",
    description: "Biotin + Onion Oil",
    category: "Hair Conditioners",
    img: "/products/conditioner.png",
  },

  /* ===================== HAIR SERUMS ===================== */
  {
    id: 52,
    name: "Hair Growth & Follicle Activation Serum",
    description: "Anagain + Redensyl",
    category: "Hair Serums",
    img: "/products/hair-serum.png",
  },
  {
    id: 53,
    name: "Hair Straightening & Repairing Serum",
    description: "Biotin + Keratin + Protein",
    category: "Hair Serums",
    img: "/products/hair-serum.png",
  },
  {
    id: 54,
    name: "Hair Nourishing Serum",
    description: "Bhringraj + Amla",
    category: "Hair Serums",
    img: "/products/hair-serum.png",
  },
  {
    id: 55,
    name: "Anti-Frizz & Hair Smoothing Serum",
    description: "Hyaluronic Acid + Argan Oil",
    category: "Hair Serums",
    img: "/products/hair-serum.png",
  },
  {
    id: 56,
    name: "Scalp Calming & Hydrating Hair Serum",
    description: "Hyaluronic Acid + Biotin",
    category: "Hair Serums",
    img: "/products/hair-serum.png",
  },
  {
    id: 57,
    name: "Hair Density & Strength Booster Serum",
    description: "Anagain + Biotin",
    category: "Hair Serums",
    img: "/products/hair-serum.png",
  },
  {
    id: 58,
    name: "Smoothing & Hair Fiber Repair Serum",
    description: "Keratin + Protein + Argan Oil",
    category: "Hair Serums",
    img: "/products/hair-serum.png",
  },
  {
    id: 59,
    name: "Anti-Hairfall Serum",
    description: "Redensyl + Biotin",
    category: "Hair Serums",
    img: "/products/hair-serum.png",
  },
  {
    id: 60,
    name: "Hair Growth Booster Serum",
    description: "Redensyl + Capixyl",
    category: "Hair Serums",
    img: "/products/hair-serum.png",
  },
  {
    id: 61,
    name: "Hair Densifying & Anti-Aging Scalp Serum",
    description: "Anagain + Redensyl",
    category: "Hair Serums",
    img: "/products/hair-serum.png",
  },

  /* ===================== HAIR CLEANSERS (SHAMPOOS) ===================== */
  {
    id: 62,
    name: "Keratin Bond Repair Shampoo",
    description: "Keratin + Proteins",
    category: "Hair Cleansers",
    img: "/products/shampoo.png",
  },
  {
    id: 63,
    name: "Onion Black Seed Shampoo",
    description: "Onion Oil + Black Seed",
    category: "Hair Cleansers",
    img: "/products/shampoo.png",
  },
  {
    id: 64,
    name: "Follicle Wake-Up Hair Cleanser",
    description: "Caffeine + Onion Oil",
    category: "Hair Cleansers",
    img: "/products/shampoo.png",
  },
  {
    id: 65,
    name: "Rice Radiance Shampoo",
    description: "Rice Water + Niacinamide",
    category: "Hair Cleansers",
    img: "/products/shampoo.png",
  },
  {
    id: 66,
    name: "Clarify & Balance Shampoo",
    description: "Apple Cider Vinegar + Tea Tree",
    category: "Hair Cleansers",
    img: "/products/shampoo.png",
  },
  {
    id: 67,
    name: "Volume & Hair Repair Shampoo",
    description: "Collagen + Keratin",
    category: "Hair Cleansers",
    img: "/products/shampoo.png",
  },
  {
    id: 68,
    name: "Hair Reset Hydrating Cleanser",
    description: "Peptides + Hyaluronic Acid",
    category: "Hair Cleansers",
    img: "/products/shampoo.png",
  },
  {
    id: 69,
    name: "Root Revival Shampoo",
    description: "Black Seed Oil + Onion Oil",
    category: "Hair Cleansers",
    img: "/products/shampoo.png",
  },
  {
    id: 70,
    name: "Scalp Detox Cleanser",
    description: "Salicylic Acid + Tea Tree Oil",
    category: "Hair Cleansers",
    img: "/products/shampoo.png",
  },
  {
    id: 71,
    name: "Biotin Boost Caffeine Shampoo",
    description: "Biotin + Caffeine",
    category: "Hair Cleansers",
    img: "/products/shampoo.png",
  },

  /* ===================== HAND WASH ===================== */
  {
    id: 72,
    name: "Anti-bacterial & Anti-fungal Hand Wash",
    description: "Neem Extract + Lemon",
    category: "Hand Wash",
    img: "/products/handwash.png",
  },
  {
    id: 73,
    name: "Anti-microbial & Cooling Hand Wash",
    description: "Mint + Eucalyptus",
    category: "Hand Wash",
    img: "/products/handwash.png",
  },
  {
    id: 74,
    name: "Calming Lavender Hand Wash",
    description: "Lavender + Aloe Vera",
    category: "Hand Wash",
    img: "/products/handwash.png",
  },
  {
    id: 75,
    name: "Raspberry Radiance Hand Wash",
    description: "Raspberry + Aloe Vera",
    category: "Hand Wash",
    img: "/products/handwash.png",
  },
  {
    id: 76,
    name: "Aloe & Neem Soft Care Hand Wash",
    description: "Aloe Vera + Neem Extract",
    category: "Hand Wash",
    img: "/products/handwash.png",
  },
  {
    id: 77,
    name: "Lavender Breeze Hydrating Hand Wash",
    description: "Lavender + Hyaluronic Acid",
    category: "Hand Wash",
    img: "/products/handwash.png",
  },
  {
    id: 78,
    name: "Eucalyptus Defense Hand Wash",
    description: "Eucalyptus + Tea Tree Oil",
    category: "Hand Wash",
    img: "/products/handwash.png",
  },
  {
    id: 79,
    name: "Fruit Fresh Hand Wash",
    description: "Raspberry + Lemon",
    category: "Hand Wash",
    img: "/products/handwash.png",
  },
  {
    id: 80,
    name: "Citrus & Herb Hand Cleanser",
    description: "Lemon + Mint",
    category: "Hand Wash",
    img: "/products/handwash.png",
  },

  /* ===================== INTIMATE CARE ===================== */
  {
    id: 81,
    name: "pH Balance Intimate Wash",
    description: "Lactic Acid + Probiotics",
    category: "Intimate Care",
    img: "/products/intimate.png",
  },
  {
    id: 82,
    name: "Daily Comfort Intimate Wash",
    description: "Aloe Vera + Hyaluronic Acid",
    category: "Intimate Care",
    img: "/products/intimate.png",
  },
  {
    id: 83,
    name: "Bright & Smooth Intimate Cleanser",
    description: "Niacinamide + Lactic Acid",
    category: "Intimate Care",
    img: "/products/intimate.png",
  },
  {
    id: 84,
    name: "Firm & Fresh Intimate Wash",
    description: "Peptides + Hyaluronic Acid",
    category: "Intimate Care",
    img: "/products/intimate.png",
  },
  {
    id: 85,
    name: "Anti-Irritation & Barrier Support Wash",
    description: "Aloe Vera + Peptides",
    category: "Intimate Care",
    img: "/products/intimate.png",
  },
  {
    id: 86,
    name: "Flora Defense Intimate Cleanser",
    description: "Probiotics + Prebiotics",
    category: "Intimate Care",
    img: "/products/intimate.png",
  },
  {
    id: 87,
    name: "Microbiome Balancing Wash",
    description: "Probiotics + Prebiotics + Lactic Acid",
    category: "Intimate Care",
    img: "/products/intimate.png",
  },
  {
    id: 88,
    name: "Intimate Hydration Serum",
    description: "Hyaluronic Acid + Peptides",
    category: "Intimate Care",
    img: "/products/intimate.png",
  },
  {
    id: 89,
    name: "Brightening Intimate Gentle Scrub",
    description: "Lactic Acid + Licorice Extract",
    category: "Intimate Care",
    img: "/products/intimate.png",
  },
  {
    id: 90,
    name: "Post-Wax Soothing Mist",
    description: "Aloe Vera + Witch Hazel",
    category: "Intimate Care",
    img: "/products/intimate.png",
  },
  {
    id: 91,
    name: "Bikini Bright Serum",
    description: "Niacinamide + Peptides",
    category: "Intimate Care",
    img: "/products/intimate.png",
  },

  /* ===================== BODY WASH / SHOWER GELS ===================== */
  {
    id: 92,
    name: "Clarifying & Calming Body Wash",
    description: "Niacinamide + Vitamin E",
    category: "Body Wash",
    img: "/products/bodywash.png",
  },
  {
    id: 93,
    name: "HydraSoft Body Cleanser",
    description: "Hyaluronic Acid + Lactic Acid",
    category: "Body Wash",
    img: "/products/bodywash.png",
  },
  {
    id: 94,
    name: "ClearSkin Body Wash",
    description: "Salicylic Acid + Niacinamide",
    category: "Body Wash",
    img: "/products/bodywash.png",
  },
  {
    id: 95,
    name: "Silky Glow Shower Gel",
    description: "Vitamin E + Lactic Acid",
    category: "Body Wash",
    img: "/products/bodywash.png",
  },
  {
    id: 96,
    name: "Pore Purifying Body Wash",
    description: "Salicylic Acid + Green Tea",
    category: "Body Wash",
    img: "/products/bodywash.png",
  },
  {
    id: 97,
    name: "Hydrating & Soothing Body Wash",
    description: "Hyaluronic Acid + Aloe Vera",
    category: "Body Wash",
    img: "/products/bodywash.png",
  },
  {
    id: 98,
    name: "Glow Therapy Shower Gel",
    description: "Lactic Acid + Licorice Extract",
    category: "Body Wash",
    img: "/products/bodywash.png",
  },
  {
    id: 99,
    name: "Daily Detox Body Wash",
    description: "Niacinamide + Activated Charcoal",
    category: "Body Wash",
    img: "/products/bodywash.png",
  },
  {
    id: 100,
    name: "Barrier Boost Shower Gel",
    description: "Niacinamide + Ceramides",
    category: "Body Wash",
    img: "/products/bodywash.png",
  },
  {
    id: 101,
    name: "Anti-Pigmentation & Anti-Inflammatory Shower Gel",
    description: "Licorice + Green Tea",
    category: "Body Wash",
    img: "/products/bodywash.png",
  },

  /* ===================== FACE CLEANSERS ===================== */
  {
    id: 102,
    name: "Anti-Acne Face Cleanser",
    description: "Salicylic Acid + Niacinamide",
    category: "Face Cleansers",
    img: "/products/facecleanser.png",
  },
  {
    id: 103,
    name: "Skin Brightening & Hydrating Face Wash",
    description: "Vitamin C + Hyaluronic Acid",
    category: "Face Cleansers",
    img: "/products/facecleanser.png",
  },
  {
    id: 104,
    name: "Hydra Boost Face Wash",
    description: "Hyaluronic Acid + Peptides",
    category: "Face Cleansers",
    img: "/products/facecleanser.png",
  },
  {
    id: 105,
    name: "Barrier Repairing & Calming Face Wash",
    description: "Niacinamide + Peptides",
    category: "Face Cleansers",
    img: "/products/facecleanser.png",
  },
  {
    id: 106,
    name: "Deep Pore Cleanser",
    description: "Salicylic Acid + Green Tea",
    category: "Face Cleansers",
    img: "/products/facecleanser.png",
  },
  {
    id: 107,
    name: "Derma Clear Face Cleanser",
    description: "Niacinamide + Azelaic Acid",
    category: "Face Cleansers",
    img: "/products/facecleanser.png",
  },
  {
    id: 108,
    name: "AquaYouth Facial Cleanser",
    description: "Peptides + Ceramides",
    category: "Face Cleansers",
    img: "/products/facecleanser.png",
  },
  {
    id: 109,
    name: "BrightLift Foaming Cleanser",
    description: "Vitamin C + Licorice Extract",
    category: "Face Cleansers",
    img: "/products/facecleanser.png",
  },
  {
    id: 110,
    name: "Anti-Pigmentation & Barrier Supporting Face Wash",
    description: "Licorice + Allantoin",
    category: "Face Cleansers",
    img: "/products/facecleanser.png",
  },
  {
    id: 111,
    name: "Anti-Inflammatory & Soothing Face Wash",
    description: "Azelaic Acid + Green Tea",
    category: "Face Cleansers",
    img: "/products/facecleanser.png",
  },

  /* ===================== HAIR MASKS ===================== */
  {
    id: 112,
    name: "Deep Conditioning & Repairing Protein Mask",
    description: "Keratin & Protein + Shea Butter",
    category: "Hair Masks",
    img: "/products/hairmask.png",
  },
  {
    id: 113,
    name: "Ultra Nourishing Hair Mask",
    description: "Almond Oil + Avocado Oil",
    category: "Hair Masks",
    img: "/products/hairmask.png",
  },
  {
    id: 114,
    name: "Silky & Shine Hair Mask",
    description: "Argan Oil + Vitamin E",
    category: "Hair Masks",
    img: "/products/hairmask.png",
  },
  {
    id: 115,
    name: "Hydration Therapy Mask",
    description: "Jojoba Oil + Hyaluronic Acid",
    category: "Hair Masks",
    img: "/products/hairmask.png",
  },
  {
    id: 116,
    name: "Frizz Control Mask",
    description: "Shea Butter + Peptides",
    category: "Hair Masks",
    img: "/products/hairmask.png",
  },
  {
    id: 117,
    name: "Anti-Hair Fall & Oil Control Scalp Mask",
    description: "Niacinamide + Caffeine",
    category: "Hair Masks",
    img: "/products/hairmask.png",
  },

  /* ===================== HAIR SPA ===================== */
  {
    id: 118,
    name: "Repairing & Rejuvenating Hair Spa",
    description: "Shea Butter + Keratin & Protein",
    category: "Hair Spa",
    img: "/products/hairspa.png",
  },
  {
    id: 119,
    name: "Smooth Shine & Anti-Frizz Spa",
    description: "Vitamin E + Argan Oil",
    category: "Hair Spa",
    img: "/products/hairspa.png",
  },
  {
    id: 120,
    name: "Revitalizing Hair Spa",
    description: "Avocado Oil + Jojoba Oil",
    category: "Hair Spa",
    img: "/products/hairspa.png",
  },
  {
    id: 121,
    name: "Growth Boost Spa",
    description: "Redensyl + Biotin",
    category: "Hair Spa",
    img: "/products/hairspa.png",
  },
  {
    id: 122,
    name: "Soothing & Oil Control Hair & Scalp Spa",
    description: "Aloe Vera + Niacinamide",
    category: "Hair Spa",
    img: "/products/hairspa.png",
  },
  {
    id: 123,
    name: "Anti-Hairfall & Scalp Hydration Spa",
    description: "Caffeine + Hyaluronic Acid",
    category: "Hair Spa",
    img: "/products/hairspa.png",
  },

  /* ===================== SCRUBS & PACKS ===================== */
  {
    id: 124,
    name: "Brightening & Skin Smoothing Scrub",
    description: "Vitamin C + Alpha Arbutin + Walnut Shell Powder",
    category: "Scrubs & Packs",
    img: "/products/scrub.png",
  },
  {
    id: 125,
    name: "De-Tan Body Scrub with Caffeine",
    description: "Allantoin + Caffeine",
    category: "Scrubs & Packs",
    img: "/products/scrub.png",
  },
  {
    id: 126,
    name: "Herbal Glow Ubtan Scrub",
    description: "Turmeric + Sandalwood Powder",
    category: "Scrubs & Packs",
    img: "/products/scrub.png",
  },
  {
    id: 127,
    name: "Charcoal Detox Scrub",
    description: "Activated Charcoal + Clay + Niacinamide",
    category: "Scrubs & Packs",
    img: "/products/scrub.png",
  },
  {
    id: 128,
    name: "Pore Tightening & Glow Face Pack",
    description: "Kaolin Clay + Vitamin C",
    category: "Scrubs & Packs",
    img: "/products/scrub.png",
  },
  {
    id: 129,
    name: "Glow Repair Night Face Mask",
    description: "Niacinamide + Ceramides + Peptides",
    category: "Scrubs & Packs",
    img: "/products/scrub.png",
  },
  {
    id: 130,
    name: "Acne & Oil Control Face Pack",
    description: "Multani Mitti + Neem",
    category: "Scrubs & Packs",
    img: "/products/scrub.png",
  },
  {
    id: 131,
    name: "Ubtan Herbal Glow Pack",
    description: "Turmeric + Saffron + Sandalwood",
    category: "Scrubs & Packs",
    img: "/products/scrub.png",
  },
  {
    id: 132,
    name: "Detox & Smooth Face Pack",
    description: "Charcoal + Bentonite + Tea Tree",
    category: "Scrubs & Packs",
    img: "/products/scrub.png",
  },
  {
    id: 133,
    name: "Tan Removal & Softening Face Pack",
    description: "Vitamin C + Honey + Lemon Extract",
    category: "Scrubs & Packs",
    img: "/products/scrub.png",
  },

  /* ===================== SKIN TONERS ===================== */
  {
    id: 134,
    name: "HydraBalance Facial Toner",
    description: "Hyaluronic Acid + Allantoin",
    category: "Skin Toners",
    img: "/products/toner.png",
  },
  {
    id: 135,
    name: "Oil Control & Pore Tightening Toner",
    description: "Witch Hazel + Niacinamide",
    category: "Skin Toners",
    img: "/products/toner.png",
  },
  {
    id: 136,
    name: "Radiance & Antioxidant Boost Toner",
    description: "Vitamin C + Green Tea",
    category: "Skin Toners",
    img: "/products/toner.png",
  },
  {
    id: 137,
    name: "Redness & Sensitivity Relief Toner",
    description: "Aloe Vera + Cucumber Extract",
    category: "Skin Toners",
    img: "/products/toner.png",
  },
  {
    id: 138,
    name: "Mild Exfoliating Toner",
    description: "Lactic Acid + Probiotics",
    category: "Skin Toners",
    img: "/products/toner.png",
  },
  {
    id: 139,
    name: "Skin Tone Correction Toner",
    description: "Alpha Arbutin + Licorice Extract",
    category: "Skin Toners",
    img: "/products/toner.png",
  },
  {
    id: 140,
    name: "Sebum Control Toner",
    description: "Salicylic Acid + Tea Tree Water",
    category: "Skin Toners",
    img: "/products/toner.png",
  },
  {
    id: 141,
    name: "Barrier Repair Toner",
    description: "Ceramides + Panthenol",
    category: "Skin Toners",
    img: "/products/toner.png",
  },
  {
    id: 142,
    name: "Natural Detox & Calming Toner",
    description: "Rose Water + Chamomile Extract",
    category: "Skin Toners",
    img: "/products/toner.png",
  },
  {
    id: 143,
    name: "Firming & Anti-Ageing Toner",
    description: "Peptides + Seaweed Extract",
    category: "Skin Toners",
    img: "/products/toner.png",
  },

  /* ===================== HAIR & BODY MISTS ===================== */
  {
    id: 144,
    name: "Soothing & Hydrating Hair & Body Mist",
    description: "Allantoin + Aloe Vera",
    category: "Hair & Body Mists",
    img: "/products/mist.png",
  },
  {
    id: 145,
    name: "Hydra-Fresh Radiance Hair & Body Mist",
    description: "Cucumber Extract",
    category: "Hair & Body Mists",
    img: "/products/mist.png",
  },
  {
    id: 146,
    name: "Daily Detox Revive Hair & Body Mist",
    description: "Green Tea",
    category: "Hair & Body Mists",
    img: "/products/mist.png",
  },
  {
    id: 147,
    name: "Lavender Water Hair & Body Mist",
    description: "Lavender Extract",
    category: "Hair & Body Mists",
    img: "/products/mist.png",
  },
  {
    id: 148,
    name: "Raspberry Hair & Body Mist",
    description: "Raspberry Extract",
    category: "Hair & Body Mists",
    img: "/products/mist.png",
  },
  {
    id: 149,
    name: "Hyaluron Hair & Body Mist",
    description: "Argan Extract + Hyaluronic Acid",
    category: "Hair & Body Mists",
    img: "/products/mist.png",
  },
  {
    id: 150,
    name: "Vitamin Rich Hair & Body Mist",
    description: "Pro Vitamin B5 + Vitamin B3",
    category: "Hair & Body Mists",
    img: "/products/mist.png",
  },
  {
    id: 151,
    name: "Rose Water Hair & Body Mist",
    description: "Rose Water + Niacinamide",
    category: "Hair & Body Mists",
    img: "/products/mist.png",
  },

  /* ===================== BABY CARE ===================== */
  {
    id: 152,
    name: "Gentle Baby Shampoo",
    description: "Calendula + Chamomile",
    category: "Baby Care",
    img: "/products/baby.png",
  },
  {
    id: 153,
    name: "Gentle Baby Cleanser",
    description: "Oat Extract + Aloe Vera",
    category: "Baby Care",
    img: "/products/baby.png",
  },
  {
    id: 154,
    name: "Velvet Touch Baby Lotion",
    description: "Shea Butter + Jojoba Oil + Vitamin E",
    category: "Baby Care",
    img: "/products/baby.png",
  },
  {
    id: 155,
    name: "Diaper Rash Cream",
    description: "Zinc Oxide + Calendula + Beeswax",
    category: "Baby Care",
    img: "/products/baby.png",
  },
  {
    id: 156,
    name: "Nourishing Baby Cream",
    description: "Avocado Oil + Ceramides + Pro-Vitamin B5",
    category: "Baby Care",
    img: "/products/baby.png",
  },
  {
    id: 157,
    name: "Baby Massage Oil",
    description: "Almond Oil + Olive Oil + Chamomile Oil",
    category: "Baby Care",
    img: "/products/baby.png",
  },
  {
    id: 158,
    name: "Baby Mineral Sunscreen SPF 30",
    description: "Zinc Oxide + Shea Butter",
    category: "Baby Care",
    img: "/products/baby.png",
  },
  {
    id: 159,
    name: "Baby Lip Balm",
    description: "Shea Butter + Coconut Oil + Beeswax",
    category: "Baby Care",
    img: "/products/baby.png",
  },
  {
    id: 160,
    name: "Baby Hair Oil",
    description: "Coconut + Bhringraj + Vitamin E",
    category: "Baby Care",
    img: "/products/baby.png",
  },
  {
    id: 161,
    name: "Alcohol-Free Baby Cologne",
    description: "Allantoin + Pro-Vitamin B5",
    category: "Baby Care",
    img: "/products/baby.png",
  },

  /* ===================== SUN CARE ===================== */
  {
    id: 162,
    name: "Daily Glow Sunscreen Cream SPF 30",
    description: "Niacinamide + Vitamin E + Ferulic Acid",
    category: "Sun Care",
    img: "/products/sunscreen.png",
  },
  {
    id: 163,
    name: "Bright Shield Vitamin C Sunscreen Gel SPF 50",
    description: "Vitamin C + Hyaluronic Acid",
    category: "Sun Care",
    img: "/products/sunscreen.png",
  },
  {
    id: 164,
    name: "Ceramide Barrier Sunscreen Lotion SPF 50+",
    description: "Ceramides + Niacinamide",
    category: "Sun Care",
    img: "/products/sunscreen.png",
  },
  {
    id: 165,
    name: "HydraLock Sunscreen Mist SPF 30",
    description: "Hyaluronic Acid + Aloe Vera",
    category: "Sun Care",
    img: "/products/sunscreen.png",
  },
  {
    id: 166,
    name: "Matte Finish UV Defense Sunscreen SPF 50",
    description: "Zinc Oxide + Niacinamide + Ferulic Acid",
    category: "Sun Care",
    img: "/products/sunscreen.png",
  },
  {
    id: 167,
    name: "Vitamin Boost Sunscreen Serum SPF 40",
    description: "Vitamin C + Vitamin E + Ferulic Acid",
    category: "Sun Care",
    img: "/products/sunscreen.png",
  },
  {
    id: 168,
    name: "Tone & Tight UV Shield SPF 50",
    description: "Peptides + Ceramides",
    category: "Sun Care",
    img: "/products/sunscreen.png",
  },
  {
    id: 169,
    name: "Sensitive Skin Physical Sunscreen SPF 30",
    description: "Zinc Oxide + Ceramides + Ferulic Acid",
    category: "Sun Care",
    img: "/products/sunscreen.png",
  },
  {
    id: 170,
    name: "Tinted Sunscreen SPF 50+",
    description: "Skin-Tone Pigments + Iron Oxides",
    category: "Sun Care",
    img: "/products/sunscreen.png",
  },

  /* ===================== UNDER EYE & LIP CARE ===================== */
  {
    id: 171,
    name: "Revive & De-Puff Eye Gel",
    description: "Caffeine + Aloe Vera",
    category: "Under Eye & Lip Care",
    img: "/products/eye-lip.png",
  },
  {
    id: 172,
    name: "Brightening & Nourishing Under Eye Roll On",
    description: "Niacinamide + Vitamin C",
    category: "Under Eye & Lip Care",
    img: "/products/eye-lip.png",
  },
  {
    id: 173,
    name: "Firm & Lift Peptide Eye Cream",
    description: "Peptides + Hyaluronic Acid",
    category: "Under Eye & Lip Care",
    img: "/products/eye-lip.png",
  },
  {
    id: 174,
    name: "Sensitive & Soothing Under Eye Serum",
    description: "Chamomile + Panthenol + Allantoin",
    category: "Under Eye & Lip Care",
    img: "/products/eye-lip.png",
  },
  {
    id: 175,
    name: "HydraPlump Lip Balm",
    description: "Hyaluronic Acid + Shea Butter",
    category: "Under Eye & Lip Care",
    img: "/products/eye-lip.png",
  },
  {
    id: 176,
    name: "Tint & Treat Lip Mask",
    description: "Vitamin E + Almond Oil",
    category: "Under Eye & Lip Care",
    img: "/products/eye-lip.png",
  },
  {
    id: 177,
    name: "Natural Shine & Softness Lip Butter",
    description: "Rose Oil + Beeswax",
    category: "Under Eye & Lip Care",
    img: "/products/eye-lip.png",
  },
  {
    id: 178,
    name: "SPF Lip Shield Balm",
    description: "Squalane + Ferulic Acid",
    category: "Under Eye & Lip Care",
    img: "/products/eye-lip.png",
  },
  {
    id: 179,
    name: "Lip Plump Boost Gloss",
    description: "Peptides + Olive Oil",
    category: "Under Eye & Lip Care",
    img: "/products/eye-lip.png",
  },

  /* ===================== MEN'S GROOMING ===================== */
  {
    id: 180,
    name: "Hair & Beard Mist",
    description: "Sandalwood + Aloe Vera",
    category: "Men's Grooming",
    img: "/products/men.png",
  },
  {
    id: 181,
    name: "Multi-Action Clay Pack for Men",
    description: "Kaolin + Charcoal + Niacinamide",
    category: "Men's Grooming",
    img: "/products/men.png",
  },
  {
    id: 182,
    name: "Oil Control Charcoal Face Wash",
    description: "Salicylic Acid + Niacinamide + Allantoin",
    category: "Men's Grooming",
    img: "/products/men.png",
  },
  {
    id: 183,
    name: "Daily Brightening Vitamin C Face Wash",
    description: "Vitamin C + Alpha Arbutin",
    category: "Men's Grooming",
    img: "/products/men.png",
  },
  {
    id: 184,
    name: "De-Tan & Refresh Face Scrub",
    description: "Coffee + Walnut Shell + Niacinamide",
    category: "Men's Grooming",
    img: "/products/men.png",
  },
  {
    id: 185,
    name: "HydraBalance Gel Moisturizer",
    description: "Hyaluronic Acid + Aloe Vera",
    category: "Men's Grooming",
    img: "/products/men.png",
  },
  {
    id: 186,
    name: "Beard & Mustache Growth Oil",
    description: "Argan Oil + Redensyl + Vitamin E",
    category: "Men's Grooming",
    img: "/products/men.png",
  },
  {
    id: 187,
    name: "After Shave Gel",
    description: "Aloe Vera + Chamomile + Witch Hazel",
    category: "Men's Grooming",
    img: "/products/men.png",
  },
  {
    id: 188,
    name: "Beard & Mustache Styling Gel",
    description: "Hydrolyzed Keratin + Pro-Vitamin B5",
    category: "Men's Grooming",
    img: "/products/men.png",
  },
  {
    id: 189,
    name: "Anti-Hairfall Shampoo for Men",
    description: "Biotin + Caffeine + Keratin",
    category: "Men's Grooming",
    img: "/products/men.png",
  },
  {
    id: 190,
    name: "Anti-Dandruff Power Shampoo",
    description: "Tea Tree Oil + Zinc PCA",
    category: "Men's Grooming",
    img: "/products/men.png",
  },
  {
    id: 191,
    name: "Sport Fresh Body Wash",
    description: "Menthol + Charcoal",
    category: "Men's Grooming",
    img: "/products/men.png",
  },
  {
    id: 192,
    name: "Hydra Defense Body Lotion",
    description: "Squalane + Vitamin E + Glycerin",
    category: "Men's Grooming",
    img: "/products/men.png",
  },
  {
    id: 193,
    name: "Tan Removal Body Scrub",
    description: "Coffee + Lemon Extract",
    category: "Men's Grooming",
    img: "/products/men.png",
  },

  /* ===================== RANGE (categories shown in brochure) ===================== */
  {
    id: 194,
    name: "Skin Care (Range)",
    description: "Complete face & skin solutions",
    category: "Range",
    img: "/range/skin-care.jpg",
  },
  {
    id: 195,
    name: "Baby Care (Range)",
    description: "Gentle & safe baby products",
    category: "Range",
    img: "/range/baby-care.jpg",
  },
  {
    id: 196,
    name: "Hair Care (Range)",
    description: "Advanced hair treatment range",
    category: "Range",
    img: "/range/hair-care.jpg",
  },
  {
    id: 197,
    name: "Bath & Shower (Range)",
    description: "Cleansing & spa experience",
    category: "Range",
    img: "/range/bath.jpg",
  },
  {
    id: 198,
    name: "Sun Care (Range)",
    description: "UV protection solutions",
    category: "Range",
    img: "/range/sun.jpg",
  },
  {
    id: 199,
    name: "Men’s Grooming (Range)",
    description: "Beard, skin & grooming products",
    category: "Range",
    img: "/range/men.jpg",
  },
];

export default function Home() {
  return (
    <>
      {/* ================= BANNER ================= */}
      <section className="relative py-6 bg-[#effaed]">
        <div className="max-w-[1500px] mx-auto px-6">
          {/* OUTER SOFT LAYER */}
          <div className="relative rounded-[3.5rem] p-2 bg-gradient-to-b from-white/60 to-transparent">
            {/* MAIN CAPSULE */}
            <div className="relative h-[30vh] min-h-[260px] overflow-hidden rounded-[3rem] bg-gradient-to-r from-[#EDF5EE] via-[#E1EFE4] to-[#D4E8D8] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.15)]">
              {/* RADIAL GLOW */}
              <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_90%_50%,rgba(255,255,255,0.45),transparent)]"></div>

              {/* CONTENT */}
              <div className="relative grid h-full grid-cols-1 md:grid-cols-2 items-center px-12 md:px-20">
                {/* LEFT CONTENT */}
                <div className="max-w-xl">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#14542B] leading-tight mb-3">
                    Branded products that fit <br />
                    your industry, perfectly.
                  </h2>

                  <p className="text-[#14542B]/80 mb-5 max-w-md text-sm md:text-base">
                    From custom merchandise to promotional solutions, we help
                    businesses create a lasting impression.
                  </p>

                  <button className="inline-flex items-center gap-2 bg-[#83A33C] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition">
                    Shop by industry →
                  </button>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative flex justify-end items-center h-full">
                  <img
                    src="/product-hero.png"
                    alt="Branded Product"
                    className="h-[100%] max-h-[220px] scale-150 object-cover drop-shadow-[0_40px_40px_rgba(0,0,0,0.25)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT CARDS ================= */}
      <section className="bg-[#effaed]">
        <div className="ui-section mx-auto ">
          <h1 className="ui-h1 mb-10 text-center">Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((item) => (
              <div
                key={item.id}
                className="
    rounded-2xl w-70 bg-white overflow-hidden
    shadow-lg hover:shadow-xl transition
    hover:scale-[1.02]
  "
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff, rgba(83,148,91,0.08))",
                }}
              >
                {/* IMAGE */}
                <div className="h-75 bg-gray-50 flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-full w-full object-fill"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-4">
                  <h3 className="text-base font-semibold text-[#242424] mb-1">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500 mb-3">
                    {item.description}
                  </p>

                  {/* PRICE + CTA */}
                  <div className="flex items-center justify-between">
                    {/* <span className="font-bold text-[#14542B]">
                      {item.price}
                    </span> */}

                    <Link
                      href="/contact-us"
                      className="
    px-4 py-2 text-xs rounded-lg font-semibold text-white
    transition-all hover:scale-105
  "
                      style={{
                        background: "linear-gradient(135deg, #53945B, #83A33C)",
                      }}
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
