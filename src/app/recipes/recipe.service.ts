import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "test",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"
    ),
    new Recipe(
      "Another test recipe",
      "test",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"
    )
  ];

  getRecipes() {
    return this.recipes.slice(); //This will return a new array
  }
}
