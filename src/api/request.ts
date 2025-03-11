import { RecipeDetail, RecipeList, RecipesSearchParams } from "@/interfaces/recipes";
import { API_BASE_URL, API_KEY, fetchConfig } from "@/utils/utils";

export const getReceipts = async (searchParams: RecipesSearchParams): Promise<RecipeList> => {
	const {query, cuisine, mins} = searchParams
	const response = await fetch(`${API_BASE_URL}/complexSearch?cuisine=${cuisine}&query=${query}&maxReadyTime=${mins}&apiKey=${API_KEY}`, fetchConfig)
	const data = await response.json();
	return data;
}

export const getRecipe = async (id: string): Promise<RecipeDetail> => {
    const response = await fetch(`${API_BASE_URL}/${id}/information?apiKey=${API_KEY}`, fetchConfig)
    const data = response.json();
    return data;
}