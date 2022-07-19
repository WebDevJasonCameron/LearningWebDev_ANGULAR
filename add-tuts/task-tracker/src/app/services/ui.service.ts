import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UiService {

  // ATT
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  // CON
  constructor() { }

  // LC

  // FUN
  toggleAddTask(): void{
    console.log('toggleAddTask');
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

} //<--END
