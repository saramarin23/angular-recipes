import { Component, EventEmitter, Output } from "@angular/core";
// import { EventEmitter } from 'protractor';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>(); //Output para que el evento se pueda escuchar desde el componente padre (app)
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
