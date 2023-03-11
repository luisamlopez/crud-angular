import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipes';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Recipe = { name: '', description: '' };

  constructor(public recipeService: RecipeService) {}

  ngOnInit() {}

  deleteRecipe(recipe: Recipe) {
    if (confirm('Are you sure you want to delete this recipe?')) {
      this.recipeService.deleteRecipe(recipe);
    }
  }
}
