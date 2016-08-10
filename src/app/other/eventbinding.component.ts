import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-eventbinding',
  template: `
    <button (click) = "onClickEvent1()">Click private event </button>
    <hr>
    <button (click) = "onClickEvent2()">Click public event </button>
  `,
  styles: []
})


export class EventbindingComponent  {

@Output() publicCustomEventListenable = new EventEmitter<string>();


privateCustomEvent = new EventEmitter<string>();

  onClickEvent1(){
    //alert("Thanks for clicking");
    this.privateCustomEvent.emit("Thanks for clicking (private event within component)");
  }

  onClickEvent2(){
    this.publicCustomEventListenable.emit("Thanks for clicking (public event within component)");
  }

}
