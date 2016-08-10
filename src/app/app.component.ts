import { Component } from '@angular/core';
import { OtherComponent } from './other';
import { AnotherComponent } from './other';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
  <h1>This is App Component!!</h1>
  <app-other></app-other>
  <app-another>
    <div>
      <h1> Data fed from AppComponent along with styles, to another component. Isn't that great!!</h1>
    </div>
  </app-another>
  `,
  styleUrls: ['app.component.css'],
  directives: [OtherComponent, AnotherComponent]
})
export class AppComponent {
  title = 'First app works! This is great';
}
