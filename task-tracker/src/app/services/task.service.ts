import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from 'src/app/Task';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // ATT
  private apiUrl = 'http://localhost:5003/tasks'

  // CON
  constructor(private http:HttpClient) { }

  // FUN
  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

} //<--END
