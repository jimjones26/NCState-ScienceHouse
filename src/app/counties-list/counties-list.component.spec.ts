/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CountiesListComponent } from './counties-list.component';

describe('CountiesListComponent', () => {
  let component: CountiesListComponent;
  let fixture: ComponentFixture<CountiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountiesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
