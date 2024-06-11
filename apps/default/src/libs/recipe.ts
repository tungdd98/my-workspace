import { RecipeEndpoint } from '../constants/recipe.endpoints';
import { IRecipe } from '../types/common.types';

const API_URL = 'https://5eaf78cd0605ed0016d2c9a1.mockapi.io/api/tv/';

export const getAllRecipe = async (): Promise<IRecipe[]> => {
  const data = await fetch(`${API_URL}${RecipeEndpoint.GET}`);

  if (!data.ok) {
    throw new Error('Failed to fetch data');
  }

  return data.json();
};

export const getRecipeDetail = async (id: string): Promise<IRecipe> => {
  const data = await fetch(
    `${API_URL}${RecipeEndpoint.GET_DETAIL.replace(/:id/, id)}`
  );

  if (!data.ok) {
    throw new Error('Failed to fetch data');
  }

  return data.json();
};
