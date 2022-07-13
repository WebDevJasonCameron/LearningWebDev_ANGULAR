import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  // ATT
  ingredient = [];

  // CON
  constructor() { }

  // BAS
  ngOnInit(): void {
  }

  // FUN

}
