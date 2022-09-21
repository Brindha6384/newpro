import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KdbuynowComponent } from './kdbuynow.component';

describe('KdbuynowComponent', () => {
  let component: KdbuynowComponent;
  let fixture: ComponentFixture<KdbuynowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KdbuynowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KdbuynowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
