export type DecorPackage = {
  name: string;
  price: number;
  image: string;
};

export type Occasion = {
  slug: string;
  name: string;
  pluralName?: string;
  coverImage: string;
  dinnerImage: string;
  packages: DecorPackage[];
  menu: { mains: number; snacks: number; sweets: number };
};

export const occasions: Occasion[] = [
  {
    slug: "birthday",
    name: "Birthday",
    coverImage: "/images/b.jpg",
    dinnerImage: "/images/bd.jpg",
    menu: { mains: 5, snacks: 3, sweets: 2 },
    packages: [
      ["Sweet Surprise", 1500, "b6.jpg"],
      ["Party Paradise", 1200, "b5.jpg"],
      ["Rainbow Revelry", 550, "b4.jpg"],
      ["Fiesta Fever", 650, "b3.jpg"],
      ["Birthday Bonanza", 600, "b2.jpg"],
      ["Glam Gala", 1000, "b1.jpg"],
    ].map(([name, price, image]) => ({ name: String(name), price: Number(price), image: `/images/${image}` })),
  },
  {
    slug: "wedding",
    name: "Wedding",
    coverImage: "/images/w.jpg",
    dinnerImage: "/images/wd.jpg",
    menu: { mains: 7, snacks: 6, sweets: 4 },
    packages: [
      ["Floral Enchantment", 25000, "w1.jpg"],
      ["Vintage Allure", 40000, "w2.jpg"],
      ["Golden Grace", 35000, "w3.jpg"],
      ["Ethereal Bliss", 40000, "w4.jpg"],
      ["Blush and Bloom", 55000, "w5.jpg"],
      ["Luxe Affair", 48000, "w6.jpg"],
    ].map(([name, price, image]) => ({ name: String(name), price: Number(price), image: `/images/${image}` })),
  },
  {
    slug: "anniversary",
    name: "Anniversary",
    coverImage: "/images/a.jpg",
    dinnerImage: "/images/ad.jpg",
    menu: { mains: 5, snacks: 3, sweets: 2 },
    packages: [
      ["Golden Memories", 2000, "a1.jpg"],
      ["Simple Decor", 500, "a2.jpg"],
      ["Whispers in Love", 1500, "a3.jpg"],
      ["Radiant Forever", 1000, "a4.jpg"],
      ["Cherished Moment", 1500, "a5.jpg"],
      ["Blooming Decor", 2500, "a6.jpg"],
    ].map(([name, price, image]) => ({ name: String(name), price: Number(price), image: `/images/${image}` })),
  },
  {
    slug: "engagement",
    name: "Engagement",
    coverImage: "/images/e.jpg",
    dinnerImage: "/images/ed.jpg",
    menu: { mains: 6, snacks: 5, sweets: 3 },
    packages: [
      ["Golden Glow", 20000, "e1.jpg"],
      ["Radiance of Love", 45000, "e2.jpg"],
      ["Promise Paradise", 35000, "e3.jpg"],
      ["Ever After Elegance", 48000, "e4.jpg"],
      ["Floral Forever", 50000, "e5.jpg"],
      ["Sparkling Promises", 65000, "e6.jpg"],
    ].map(([name, price, image]) => ({ name: String(name), price: Number(price), image: `/images/${image}` })),
  },
  {
    slug: "otherparty",
    name: "Other Party",
    pluralName: "Other Parties",
    coverImage: "/images/p.jpg",
    dinnerImage: "/images/pd.jpg",
    menu: { mains: 5, snacks: 5, sweets: 2 },
    packages: [
      ["Dazzling Delights", 25000, "o1.jpg"],
      ["Starlight Soiree", 15000, "o2.jpg"],
      ["Party Glow", 5000, "o3.jpg"],
      ["Christmas Vibes", 45000, "o4.jpg"],
      ["Santa Visions", 7000, "o5.jpg"],
      ["Lovely Delights", 35000, "o6.jpg"],
    ].map(([name, price, image]) => ({ name: String(name), price: Number(price), image: `/images/${image}` })),
  },
];

export const occasionBySlug = Object.fromEntries(
  occasions.map((occasion) => [occasion.slug, occasion]),
) as Record<string, Occasion>;

export const searchableRoutes: Record<string, string> = {
  birthday: "/birthday",
  wedding: "/wedding",
  anniversary: "/anniversary",
  engagement: "/engagement",
  "other party": "/otherparty",
  decoration: "/decurationpage",
  decuration: "/decurationpage",
  dinner: "/dinnerpage",
  "birthday dinner": "/birthdaydinner",
  "wedding dinner": "/weddingdinner",
  "anniversary dinner": "/anniversarydinner",
  "engagement dinner": "/engagementdinner",
  "other party dinner": "/otherpartydinner",
};

export const whatsappNumber = "918707675104";
