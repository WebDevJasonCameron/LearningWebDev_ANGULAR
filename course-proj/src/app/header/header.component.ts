import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {

  // VAR
  @Output() featureSelected = new EventEmitter<string>();

  // CON


  // FUN
  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }

}