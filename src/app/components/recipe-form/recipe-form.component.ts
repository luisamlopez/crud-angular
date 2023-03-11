import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../service/recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
})
export class RecipeFormComponent implements OnInit {
  constructor(public recipeService: RecipeService) {}

  ngOnInit(): void {}

  addRecipe(newName: HTMLInputElement, newDescription: any) {
    this.recipeService.addRecipe({
      id: this.recipeService.recipes.length + 1,
      name: newName.value,
      description: newDescription.value,
    });
    newName.value = '';
    newDescription.value = '';
    console.log(this.recipeService.getRecipes());
    return false;
  }
}
