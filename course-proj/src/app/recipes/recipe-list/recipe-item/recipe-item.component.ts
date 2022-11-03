import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // VAR
  @Input() recipe: Recipe;

  // CON
  constructor() { }

  // FUN
  ngOnInit(): void {
  }

}
