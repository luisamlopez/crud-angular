import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../service/recipe.service';
import { Recipe } from 'src/app/models/recipes';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  constructor(public recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    console.log(this.recipes);
  }
}
