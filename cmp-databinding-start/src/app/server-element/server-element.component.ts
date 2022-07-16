import { 
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component, 
  DoCheck, 
  Input, 
  OnChanges, 
  OnDestroy, 
  OnInit, 
  SimpleChange, 
  SimpleChanges, 
  ViewEncapsulation 
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, 
        OnChanges, 
        DoCheck, 
        AfterContentInit, 
        AfterContentChecked, 
        AfterViewInit,
        AfterContentChecked, 
        OnDestroy{

  // ATT
  @Input('srvElement')     // able to be bound to parent (with a alias)
  element: {type: string, name: string, content: string};

  // CON
  constructor() {
    console.log('constructor called!')
  }  

  // LIF
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!')
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit called!')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!')
  }
  
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!')
  }

  ngOnDestroy(): void {
      console.log('ngDestroyed called')
  }




  // FUN

} //<--END
