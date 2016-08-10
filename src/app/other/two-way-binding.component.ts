import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-two-way-binding',
  template: `
  <input type="text" [(ngModel)]="person.name">
  <input type="text" [(ngModel)]="person.name">
    <p>
      two-way-binding Works!
    </p>
  `,
  styles: []
})
export class TwoWayBindingComponent  {

  person = {
    name: "test"
  };
  
}
