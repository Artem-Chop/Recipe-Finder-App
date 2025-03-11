export interface Recipe {
    id: number;
	title: string;
	image: string;
	imageType: string;
}

export type RecipesSearchParams = {query: string, cuisine: string, mins: string}

export interface RecipeDetail extends Recipe {
	extendedIngredients: {original: string, id: string}[];
}

export interface RecipeList {
	results: Recipe[];
	totalResult: number;
	offset: number;
	number: number;
}