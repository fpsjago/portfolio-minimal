import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		year: z.string(),
		role: z.string(),
		description: z.string(),
		order: z.number(),
		featured: z.boolean().default(false),
	}),
});

export const collections = {
	projects: projectsCollection,
};
