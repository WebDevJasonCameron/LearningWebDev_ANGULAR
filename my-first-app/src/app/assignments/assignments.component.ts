// Assignment 03
/** 
import { Component, OnInit } from '@angular/core';

@Component({ 
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})


export class AssignmentsComponent implements OnInit {

  // ATT
  paragraph = 'Secret Password = tuna';
  paragraphShow = false;
  log = [];

  // CON
  constructor() { }

  // BASE
  ngOnInit(): void {
  }

  // FUN
  // toggle(){
  //   if(this.paragraphShow === true) {
  //     this.paragraphShow = false;
  //   }
  //   else {
  //     this.paragraphShow = true;
  //   }
  //   this.count ++;
  //   this.countList.push(this.count);
  //   console.log(this.countList.length);
  // } 

  onToggleDetails(){
    this.paragraphShow = !this.paragraphShow;
    this.log.push(new Date())
  }
  
}
*/