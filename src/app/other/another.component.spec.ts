/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { AnotherComponent } from './another.component';

describe('Component: Another', () => {
  it('should create an instance', () => {
    let component = new AnotherComponent();
    expect(component).toBeTruthy();
  });
});
