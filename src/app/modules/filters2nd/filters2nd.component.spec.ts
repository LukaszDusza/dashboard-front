import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Filters2ndComponent } from './filters2nd.component';

describe('Filters2ndComponent', () => {
  let component: Filters2ndComponent;
  let fixture: ComponentFixture<Filters2ndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Filters2ndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Filters2ndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
