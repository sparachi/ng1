import { Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-another',
  template: `
    <ng-content></ng-content>
  `,
  styles: []
})
export class AnotherComponent{

}
