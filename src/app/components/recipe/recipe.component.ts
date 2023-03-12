import { Component, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipes';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Recipe = { name: '', description: '', update: false };
  isEditEnable: boolean = false;
  @Input() newName: any;
  description: any;

  constructor(public recipeService: RecipeService) {}

  ngOnInit() {}

  deleteRecipe(recipe: Recipe) {
    if (confirm('Are you sure you want to delete this recipe?')) {
      this.recipeService.deleteRecipe(recipe);
    }
  }

  updateRecipe(recipe: Recipe) {
    const newName = document.getElementById('newName') as HTMLInputElement;
    const newDescription = document.getElementById(
      'newDescription'
    ) as HTMLTextAreaElement;
    this.isEditEnable = !this.isEditEnable;
    recipe.name = newName.value!;
    this.recipeService.updateRecipe(newName, newDescription, recipe);
  }
}
