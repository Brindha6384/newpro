import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabuynowComponent } from './sabuynow.component';

describe('SabuynowComponent', () => {
  let component: SabuynowComponent;
  let fixture: ComponentFixture<SabuynowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabuynowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SabuynowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
