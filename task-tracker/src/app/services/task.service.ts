import { Injectable } from '@angular/core';
import { TASKS } from 'src/app/mock-task';
import { Task } from 'src/app/Task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // ATT

  // CON
  constructor() { }

  // FUN
  getTasks(): Observable<Task[]>{
    const tasks = of(TASKS);
    return tasks;
  }

} //<--END
