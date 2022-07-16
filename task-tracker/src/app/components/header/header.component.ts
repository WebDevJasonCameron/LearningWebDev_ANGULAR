import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // ATT
  title: string = 'Task Tracker';

  // CON
  constructor() { }

  // LC
  ngOnInit(): void {
  }

  // FUN

}  //<--END
