import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  // ATT
  @Input()
    task: Task;
  faTimes = faTimes;

  // CON
  constructor() { }

  // LC
  ngOnInit(): void {
  }

  // FUN

} //<--END
