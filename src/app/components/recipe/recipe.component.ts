import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipes';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Recipe = { id: 0, name: '', description: '' };

  constructor() {}

  ngOnInit() {}
}
