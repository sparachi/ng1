/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { EventbindingComponent } from './eventbinding.component';

describe('Component: Eventbinding', () => {
  it('should create an instance', () => {
    let component = new EventbindingComponent();
    expect(component).toBeTruthy();
  });
});
