/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CountiesComponent } from './counties.component';

describe('CountiesComponent', () => {
  let component: CountiesComponent;
  let fixture: ComponentFixture<CountiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
