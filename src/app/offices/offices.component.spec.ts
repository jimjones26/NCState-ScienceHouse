/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OfficesComponent } from './offices.component';

describe('OfficesComponent', () => {
  let component: OfficesComponent;
  let fixture: ComponentFixture<OfficesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
