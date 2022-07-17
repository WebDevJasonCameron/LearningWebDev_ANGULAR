import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  // ATT
  @Input()
    task: Task;

  // CON
  constructor() { }

  // LC
  ngOnInit(): void {
  }

  // FUN

} //<--END
