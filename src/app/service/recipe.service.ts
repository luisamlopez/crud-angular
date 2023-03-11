import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipes';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes: Recipe[];
  constructor() {
    this.recipes = [
      {
        id: 1,
        name: 'Pizza',
        description: 'A delicious pizza',
      },
      {
        id: 2,
        name: 'Hamburger',
        description: 'A delicious hamburger',
      },
      {
        id: 3,
        name: 'Hot Dog',
        description: 'A delicious hot dog',
      },
    ];
  }

  getRecipes() {
    return this.recipes;
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }
}
