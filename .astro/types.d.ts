declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"the-ultimate-guide-to-buying-your-first-home.md": {
	id: "the-ultimate-guide-to-buying-your-first-home.md";
  slug: "the-ultimate-guide-to-buying-your-first-home";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
};
"properties": {
"1-luxury-villa-for-sale.md": {
	id: "1-luxury-villa-for-sale.md";
  slug: "1-luxury-villa-for-sale";
  body: string;
  collection: "properties";
  data: any
} & { render(): Render[".md"] };
"10-student-apartment.md": {
	id: "10-student-apartment.md";
  slug: "10-student-apartment";
  body: string;
  collection: "properties";
  data: any
} & { render(): Render[".md"] };
"11-tech-district-condo.md": {
	id: "11-tech-district-condo.md";
  slug: "11-tech-district-condo";
  body: string;
  collection: "properties";
  data: any
} & { render(): Render[".md"] };
"12-family-ranch-home.md": {
	id: "12-family-ranch-home.md";
  slug: "12-family-ranch-home";
  body: string;
  collection: "properties";
  data: any
} & { render(): Render[".md"] };
"13-hollywood-hills-retreat.md": {
	id: "13-hollywood-hills-retreat.md";
  slug: "13-hollywood-hills-retreat";
  body: string;
  collection: "properties";
  data: any
} & { render(): Render[".md"] };
"14-downtown-la-condo.md": {
	id: "14-downtown-la-condo.md";
  slug: "14-downtown-la-condo";
  body: string;
  collection: "properties";
  data: any
} & { render(): Render[".md"] };
"15-palm-springs-villa.md": {
	id: "15-palm-springs-villa.md";
  slug: "15-palm-springs-villa";
  body: string;
  collection: "properties";
  data: any
} & { render(): Render[".md"] };
"16-oceanfront-apartment.md": {
	id: "16-oceanfront-apartment.md";
  slug: "16-oceanfront-apartment";
  body: string;
  collection: "properties";
  data: any
} & { render(): Render[".md"] };
"17-suburban-townhouse.md": {
	id: "17-suburban-townhouse.md";
  slug: "17-suburban-townhouse";
  body: string;
  collection: "properties";
  data: any
} & { render(): Render[".md"] };
"18-cozy-bungalow.md": {
	id: "18-cozy-bungalow.md";
  slug: "18-cozy-bungalow";
  body: string;
  collection: "properties";
  data: any
} & { render(): Render[".md"] };
"19-penthouse-loft.md": {
	id: "19-penthouse-loft.md";
  slug: "19-penthouse-loft";
  body: string;
  collection: "properties";
  data: any
} & { render(): Render[".md"] };
"2-modern-downtown-apartment.md": {
	id: "2-modern-downtown-apartment.md";
  slug: "2-modern-downtown-apartment";
  body: string;
  collection: "properties";
  data: any
} & { render(): Render[".md"] };
"20-lake-house.md": {
	id: "20-lake-house.md";
  slug: "20-lake-house";
  body: string;
  collection: "properties";
  data: any
} & { render(): Render[".md"] };
"3-cozy-townhouse-near-beach.md": {
	id: "3-cozy-townhouse-near-beach.md";
  slug: "3-cozy-townhouse-near-beach";
  body: string;
  collection: "properties";
  data: any
} & { render(): Render[".md"] };
"4-lakeview-condo.md": {
	id: "4-lakeview-condo.md";
  slug: "4-lakeview-condo";
  body: string;
  collection: "properties";
  data: any
} & { render(): Render[".md"] };
"5-sunny-studio-apartment.md": {
	id: "5-sunny-studio-apartment.md";
  slug: "5-sunny-studio-apartment";
  body: string;
  collection: "properties";
  data: any
} & { render(): Render[".md"] };
"6-downtown-loft.md": {
	id: "6-downtown-loft.md";
  slug: "6-downtown-loft";
  body: string;
  collection: "properties";
  data: any
} & { render(): Render[".md"] };
"7-suburban-family-home.md": {
	id: "7-suburban-family-home.md";
  slug: "7-suburban-family-home";
  body: string;
  collection: "properties";
  data: any
} & { render(): Render[".md"] };
"8-luxury-hillside-mansion.md": {
	id: "8-luxury-hillside-mansion.md";
  slug: "8-luxury-hillside-mansion";
  body: string;
  collection: "properties";
  data: any
} & { render(): Render[".md"] };
"9-seaside-townhouse.md": {
	id: "9-seaside-townhouse.md";
  slug: "9-seaside-townhouse";
  body: string;
  collection: "properties";
  data: any
} & { render(): Render[".md"] };
"NYC Penthouse.md": {
	id: "NYC Penthouse.md";
  slug: "nyc-penthouse";
  body: string;
  collection: "properties";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		"blogs": {
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
