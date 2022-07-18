import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  // ATT
  tasks: Task[] = [];

  // CON
  constructor(private taskService: TaskService) { }

  // LC
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  // FUN
  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe( 
      () => this.tasks = this.tasks.filter(t => t.id  !== task.id));
  }

}  //<--END
