import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // ATT
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Simply Test Desc', 'https://unsplash.com/images/food')
  ];

  // CON
  constructor() { }

  // BASE
  ngOnInit(): void {
  }

  // FUN

}
