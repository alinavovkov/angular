import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Les02Component } from './les02.component';

describe('Les02Component', () => {
  let component: Les02Component;
  let fixture: ComponentFixture<Les02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Les02Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Les02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
