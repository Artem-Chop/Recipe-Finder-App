import { RecipeDetail, RecipeList, RecipesSearchParams } from "@/interfaces/recipes";
import { API_BASE_URL, API_KEY, fetchConfig, serializeParams } from "@/utils/utils";

export const getReceipts = async (searchParams: RecipesSearchParams): Promise<RecipeList> => {
    const query = serializeParams(searchParams)
  const response = await fetch(`${API_BASE_URL}/complexSearch${query}&apiKey=${API_KEY}`, fetchConfig)
  const data = await response.json();
  return data;
}

export const getRecipe = async (id: string): Promise<RecipeDetail> => {
    const response = await fetch(`${API_BASE_URL}/${id}/information?apiKey=${API_KEY}`, fetchConfig)
    const data = response.json();
    return data;
}