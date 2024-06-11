export interface IRecipe {
  id: string;
  title: string;
  description: string;
  prep: number;
  bake: {
    from: number;
    to: number;
  };
  total: number;
  yield: string;
}
