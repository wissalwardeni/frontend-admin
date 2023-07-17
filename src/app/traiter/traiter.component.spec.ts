import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraiterComponent } from './traiter.component';

describe('TraiterComponent', () => {
  let component: TraiterComponent;
  let fixture: ComponentFixture<TraiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
