import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouserComponent } from './carouser.component';

describe('CarouserComponent', () => {
  let component: CarouserComponent;
  let fixture: ComponentFixture<CarouserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
