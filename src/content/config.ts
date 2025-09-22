import { z, defineCollection } from 'astro:content';

const properties = defineCollection({
  schema: z.object({
    name: z.string(),
    category: z.enum([
      "Apartment",
      "House",
      "Condo",
      "Land",
      "TownHouse",
      "PentHouse",
      "Ranch",
    ]).optional(),
    status: z.enum(["For Sale", "For Rent"]).optional(),
    sold: z.boolean().default(false),
    description: z.string().optional(),
    // allow number or string (your MD uses both styles)
    price: z.union([z.number(), z.string()]).optional(),
    bedrooms: z.number().optional(),
    bathrooms: z.number().optional(),
    // allow number or string for size
    size: z.union([z.number(), z.string()]).optional(),
    address: z.string().optional(),
    lat: z.number().optional(),
    lng: z.number().optional(),
    // accept either string paths or object { image: "..." } or { src: "..." }
    photos: z.array(
      z.union([
        z.string(),
        z.object({ image: z.string() }),
        z.object({ src: z.string() }),
      ])
    ).optional(),
  }),
});

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    publishDate: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  properties,
  blog,
};