import { z, defineCollection } from 'astro:content';


const properties = defineCollection({
schema: z.object({
status: z.string().optional(),
sold: z.boolean().default(false),
price: z.number().optional(),
name: z.string(),
bedrooms: z.number().optional(),
bathrooms: z.number().optional(),
size: z.number().optional(),
category: z.string().optional(),
address: z.string().optional(),
lat: z.number().optional(),
lng: z.number().optional(),
photos: z.array(z.string()).optional(),
})
});


const blog = defineCollection({
schema: z.object({
title: z.string(),
description: z.string().optional(),
tags: z.array(z.string()).optional(),
publishDate: z.string().optional(),
draft: z.boolean().default(false),
})
});


export const collections = {
properties,
blog,
};