"use client";
import "./products.css";
import Image from "next/image";
import { ArrowUpRightIcon, HeartIcon } from "@phosphor-icons/react";

export const products = [
  {
    id: 1,
    name: "PALMIST Cucumber Lavender Face Cleanser",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_CUCUMBER_LAVENDER_FACE_CLENASER.jpg",
    description:
      "Gently cleanses skin while calming and refreshing.\nInfused with cucumber & lavender extracts.",
  },
  {
    id: 2,
    name: "PALMIST Intensive Skin Repair Face Milk",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_INTENSIVE_SKIN_REPAIR_FACE_MILK.jpg",
    description:
      "Deeply nourishes and repairs damaged skin.\nRestores softness and skin comfort.",
  },
  {
    id: 3,
    name: "PALMIST Green Tea Facial Gel",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_GREEN_TEA_FACIAL_GEL.jpg",
    description:
      "Lightweight gel with antioxidant-rich green tea.\nSoothes skin and controls excess oil.",
  },
  {
    id: 4,
    name: "PALMIST Anti Acne Face Cleanser",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_ANTI_ACNE_FACE_CLEANSER.jpg",
    description:
      "Helps reduce acne and unclog pores.\nIdeal for oily and acne-prone skin.",
  },
  {
    id: 5,
    name: "PALMIST Papaya Fruit Facial Oil",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_PAPAYA_FRUIT_FACIAL_OIL.jpg",
    description:
      "Nourishing facial oil with papaya extracts.\nEnhances glow and skin radiance.",
  },
  {
    id: 6,
    name: "PALMIST Brightening Vitamin C Toner",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_BRIGHTENING_VITAMIN_C_TONER.jpg",
    description:
      "Brightens dull skin and evens skin tone.\nPreps skin for better absorption.",
  },
  {
    id: 7,
    name: "PALMIST Fruity Powder Masque",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_FRUITY_POWDER_MASQUE.jpg",
    description:
      "Deep cleansing masque with fruit actives.\nRevives tired and dull skin.",
  },
  {
    id: 8,
    name: "PALMIST 4 Clays Face Mask",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_4_CLAYS_FACE_MASK.jpg",
    description:
      "Multi-clay formula for deep detox.\nRemoves impurities and excess oil.",
  },
  {
    id: 9,
    name: "PALMIST Bakuchiol Facial Drops",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_BAKUCHIOL_FACIAL_DROPS.jpg",
    description:
      "Plant-based retinol alternative for skin renewal.\nImproves texture and elasticity.",
  },
  {
    id: 10,
    name: "PALMIST Activated Face Mist",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_ACTIVATED_FACE_MIST.jpg",
    description:
      "Instant hydration and skin refresh.\nPerfect for on-the-go use.",
  },

  {
    id: 11,
    name: "PALMIST Ultra Hydrating Toner",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_ULTRA_HYDRATING_TONER.jpg",
    description:
      "Boosts hydration and skin moisture.\nLeaves skin plump and refreshed.",
  },
  {
    id: 12,
    name: "PALMIST Coconut Gelled Toner",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_COCONUT_GELLED_TONER.jpg",
    description:
      "Soothing toner with coconut extracts.\nCalms and hydrates skin.",
  },
  {
    id: 13,
    name: "PALMIST Anhydrous Facial Cream",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_ANHYDROUS_FACIAL_CREAM.jpg",
    description:
      "Rich cream for intense nourishment.\nLocks in moisture for long hours.",
  },
  {
    id: 14,
    name: "PALMIST Deep Foam Cleanser",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_DEEP_FOAM_CLEANSER.jpg",
    description:
      "Foaming cleanser for deep pore cleansing.\nRemoves dirt and impurities.",
  },
  {
    id: 15,
    name: "PALMIST True Skin Salve Face Cream",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_TRUE_SKIN_SALVE_face_cream.jpg",
    description:
      "Repairs and restores skin barrier.\nIdeal for dry and sensitive skin.",
  },
  {
    id: 16,
    name: "PALMIST Pure Charcoal Face Mask",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_PURE_CHARCOAL_FACE_MASK.jpg",
    description:
      "Draws out impurities and excess oil from pores.\nLeaves skin deeply cleansed and refreshed.",
  },
  {
    id: 17,
    name: "PALMIST Rose Clay Face Mask",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_ROSE_CLAY_FACE_MASK.jpg",
    description:
      "Gently detoxifies while soothing the skin.\nEnhances natural glow and softness.",
  },
  {
    id: 18,
    name: "PALMIST Coffee Foam Face Wash",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_COFFEE_FOAM_FACE_WASH.jpg",
    description:
      "Energizing face wash with coffee extracts.\nRevives dull and tired skin.",
  },
  {
    id: 19,
    name: "PALMIST Saffron Gel",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_SAFFRON_GEL.jpg",
    description:
      "Brightening gel infused with saffron.\nPromotes an even and radiant complexion.",
  },
  {
    id: 20,
    name: "PALMIST Rose Gel",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_ROSE_GEL.jpg",
    description:
      "Cooling gel that hydrates and soothes skin.\nPerfect for sensitive and irritated skin.",
  },
  {
    id: 21,
    name: "PALMIST Jojoba Face Cleanser",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_JOJOBA_FACE_CLENASER.jpg",
    description:
      "Gently cleanses while maintaining skin balance.\nSuitable for daily use on all skin types.",
  },
  {
    id: 22,
    name: "PALMIST Collagene Foam Face Wash",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_COLLAGENE_FOAM_FACE_WASH.jpg",
    description:
      "Helps maintain skin elasticity and firmness.\nCleanses without stripping moisture.",
  },
  {
    id: 23,
    name: "PALMIST Berry Night Face Mask",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_BERRY_NIGHT_FACE_MASK.jpg",
    description:
      "Overnight mask with berry antioxidants.\nRepairs and revitalizes skin while you sleep.",
  },
  {
    id: 24,
    name: "PALMIST Vitamin C Face Mask",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_VITAMIN_C_FACE_MASK.jpg",
    description:
      "Boosts skin radiance and brightness.\nHelps reduce dullness and uneven tone.",
  },
  {
    id: 25,
    name: "PALMIST Cleansing Balm",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_CLEANSING_BALM.jpg",
    description:
      "Melts away makeup and impurities gently.\nLeaves skin soft and clean.",
  },
  {
    id: 26,
    name: "PALMIST Bamboo Rich Micellar Water",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_BAMBOO_RICH_MICELLAR_WATER.jpg",
    description:
      "Removes makeup and dirt without rinsing.\nRefreshes skin instantly.",
  },
  {
    id: 27,
    name: "PALMIST Super Facial Glow Oil",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_SUPER_FACIAL_GLOW_OIL.jpg",
    description:
      "Nourishing oil for instant glow.\nImproves skin texture and radiance.",
  },
  {
    id: 28,
    name: "PALMIST Mac Fix Prep Prime Makeup Remover",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_Mac_Fix_Prep_Prime_makeup_remover.jpg",
    description:
      "Effectively removes makeup and impurities.\nPrepares skin for skincare routine.",
  },
  {
    id: 29,
    name: "PALMIST Overnight Face Balm",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_OVERNIGHT_FACE_BALM.jpg",
    description:
      "Deeply nourishes skin overnight.\nWakes up to soft and replenished skin.",
  },
  {
    id: 30,
    name: "PALMIST Fenty Skin Fat Water Toner",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_Fenty_Skin_Fat_Water_Toner.jpg",
    description:
      "Hydrating toner-serum hybrid formula.\nSmooths and preps skin.",
  },
  {
    id: 31,
    name: "PALMIST Facial Polish Face Cream",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_FACIAL_POLISH_face_cream.jpg",
    description:
      "Improves skin smoothness and glow.\nEnhances overall skin texture.",
  },
  {
    id: 32,
    name: "PALMIST Antioxidant Booster Drops Serum",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_ANTIOXIDANT_BOOSTER_DROPS_serum.jpg",
    description:
      "Protects skin from environmental stress.\nBoosts skin vitality and strength.",
  },
  {
    id: 33,
    name: "PALMIST Skin Nourishing Facial Oil",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_SKIN_NOURISHING_FACIAL_OIL.jpg",
    description:
      "Deep nourishment for healthy skin.\nEnhances natural softness and glow.",
  },
  {
    id: 34,
    name: "PALMIST Foaming Cleanser with Chamomile Hydrosol",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_FOAMING_CLEANSER_WITH_CHAMOMILE_HYDROSOL.jpg",
    description:
      "Soothing cleanser with chamomile.\nCalms and gently cleanses skin.",
  },
  {
    id: 35,
    name: "PALMIST Hydra Overnight Gel Masque",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_HYDRA_OVERNIGHT_GEL_MASQUE.jpg",
    description:
      "Intense overnight hydration treatment.\nRestores moisture balance.",
  },
  {
    id: 36,
    name: "PALMIST Natural Face Cream",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_Natural_Face_Cream.jpg",
    description:
      "Daily moisturising cream with natural actives.\nKeeps skin soft and nourished.",
  },
  {
    id: 37,
    name: "PALMIST Pure Honey Mask",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_PURE_HONEY_MASK.jpg",
    description:
      "Deeply moisturises and nourishes skin.\nLeaves skin smooth and radiant.",
  },
  {
    id: 38,
    name: "PALMIST Fruit Acid Brightening Mask",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_FRUIT_ACID_BRIGHTENING_MASK.jpg",
    description:
      "Exfoliates gently to reveal brighter skin.\nImproves skin clarity and tone.",
  },
  {
    id: 39,
    name: "PALMIST Gelled Micellar Water",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/Gelled_micellar_water.jpg",
    description:
      "Gel-based cleanser for easy makeup removal.\nHydrates while cleansing.",
  },
  {
    id: 40,
    name: "PALMIST Face Mist",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_Face_Mist.jpg",
    description:
      "Instant hydration boost for skin.\nRefreshes and revives anytime.",
  },
  {
    id: 41,
    name: "PALMIST Skin Brightening Serum",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_SKIN_BRIGHTENING_SERUM.jpg",
    description:
      "Targets dullness and uneven skin tone.\nEnhances natural brightness.",
  },
  {
    id: 42,
    name: "PALMIST Instant Facial Polish Face Cream",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_INSTANT_FACIAL_POLISH_face_cream.jpg",
    description:
      "Instantly smoothens and polishes skin.\nGives salon-like glow.",
  },
  {
    id: 43,
    name: "PALMIST Aloe Vera Gel",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_ALOE_VERA_GEL.jpg",
    description:
      "Soothes, hydrates, and calms skin.\nIdeal for daily hydration.",
  },
  {
    id: 44,
    name: "PALMIST Green Tea Cucumber Face Wash",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_GREEN_TEA_CUCUMBER_FACE_WASH.jpg",
    description:
      "Refreshing cleanser with green tea & cucumber.\nControls oil and soothes skin.",
  },
  {
    id: 45,
    name: "PALMIST Pore Refining Face Mask",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_PORE_REFINING_FACE_MASK.jpg",
    description:
      "Minimizes pores and refines texture.\nLeaves skin smooth and clear.",
  },
  {
    id: 46,
    name: "PALMIST Antioxidant Toner",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_ANTIOXIDANT_TONER.jpg",
    description:
      "Protects skin from free radical damage.\nRefreshes and balances skin.",
  },
  {
    id: 47,
    name: "PALMIST Foaming Sugar Scrub",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_FOAMING_SUGAR_SCRUB.jpg",
    description:
      "Gentle exfoliation with foaming action.\nRemoves dead skin cells.",
  },
  {
    id: 48,
    name: "PALMIST Intensive Face Oil Treatment",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_INTENSIVE_FACE_OIL_TREATMENT.jpg",
    description:
      "Deep repair treatment for stressed skin.\nImproves skin resilience.",
  },
  {
    id: 49,
    name: "PALMIST Witch Hazel Face Cleanser",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_WITCH_HAZEL_FACE_CLEANSER.jpg",
    description:
      "Balances oil and tightens pores.\nIdeal for combination skin.",
  },
  {
    id: 50,
    name: "PALMIST Oil-Free Face Cleanser",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_Oil-Free_Face_Cleanser.jpg",
    description:
      "Lightweight cleanser without oily residue.\nPerfect for oily skin types.",
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
          <h1 className="ui-h1 mb-3 text-center">Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl w-70 bg-white shadow-lg overflow-hidden hover:shadow-xl transition"
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

                    <button className="bg-[#83A33C] text-white px-4 py-2 text-xs rounded-lg font-semibold hover:scale-105 transition">
                      Know More
                    </button>
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
