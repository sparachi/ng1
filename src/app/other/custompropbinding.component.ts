import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-custompropbinding',
  template: `
    {{valueFromOutside}}
  `,
  styles: []
})


export class CustompropbindingComponent {

  @Input() valueFromOutside: number=0;

}
