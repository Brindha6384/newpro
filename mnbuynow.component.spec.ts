import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnbuynowComponent } from './mnbuynow.component';

describe('MnbuynowComponent', () => {
  let component: MnbuynowComponent;
  let fixture: ComponentFixture<MnbuynowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnbuynowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MnbuynowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
