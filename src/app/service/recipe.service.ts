import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipes';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes: Recipe[] = [];
  constructor() {}

  getRecipes() {
    if (localStorage.getItem('recipes') === null) {
      return this.recipes;
    } else {
      this.recipes = JSON.parse(localStorage.getItem('recipes')!);
      return this.recipes;
    }
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    let recipes: Recipe[] = [];
    if (recipe.name == '' || recipe.description == '') {
      alert('Please fill in the form');
      return;
    }
    if (localStorage.getItem('recipes') === null) {
      recipes.push(recipe);
      localStorage.setItem('recipes', JSON.stringify(recipes));
    } else {
      recipes = JSON.parse(localStorage.getItem('recipes') || '{}');
      recipes.push(recipe);
      localStorage.setItem('recipes', JSON.stringify(recipes));
    }
  }

  deleteRecipe(recipe: Recipe) {
    for (let i = 0; i < this.recipes.length; i++) {
      if (recipe == this.recipes[i]) {
        this.recipes.splice(i, 1);
        localStorage.setItem('recipes', JSON.stringify(this.recipes));
      }
    }
  }

  updateRecipe(newName: any, newDescription: any, recipe: Recipe) {
    console.log('antes del cambio');
    console.log(this.recipes);
    for (let i = 0; i < this.recipes.length; i++) {
      if (recipe == this.recipes[i]) {
        this.recipes.splice(i, 1);
        const newRecipe: Recipe = {
          name: newName.value,
          description: newDescription.value,
          update: false,
        };
        this.recipes.push(newRecipe);
        console.log('despues del cambio');
        console.log(this.recipes);
        localStorage.setItem('recipes', JSON.stringify(this.recipes));
        recipe.update = false;
      }
    }
  }
}
