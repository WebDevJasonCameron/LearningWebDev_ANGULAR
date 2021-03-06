import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  // ATT
  ingredients: Ingredient[] = [           //   Note this
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  // CON
  constructor() { }

  // BAS
  ngOnInit(): void {
  }

  // FUN

}
