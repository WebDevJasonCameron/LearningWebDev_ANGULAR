import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // VAR
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  // CON
  constructor() { }

  // BAS
  ngOnInit(): void {
  }

  // FUN
  onSelected(){
    this.recipeSelected.emit();
  }

} //<-END
