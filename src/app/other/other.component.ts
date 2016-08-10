import { Component } from '@angular/core';
import { AnotherComponent } from './';
import { CustompropbindingComponent } from './custompropbinding.component';
import { EventbindingComponent } from './eventbinding.component';
import { TwoWayBindingComponent } from './two-way-binding.component';

@Component({
  moduleId: module.id,
  selector: 'app-other',
  templateUrl: 'other.component.html',
  styleUrls: ['other.component.css'],
  directives: [CustompropbindingComponent, EventbindingComponent, TwoWayBindingComponent]  
})

export class OtherComponent {

  stringInterpolation = "This is string data";
  textboxData = "hey, I'm a text box";

  onEvaluation() {
    return true;
  }

  whenClicked(emittedValue : string){
    console.log(emittedValue);
    alert("check the console for the emitted data");
  }
}
