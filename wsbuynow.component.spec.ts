import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WsbuynowComponent } from './wsbuynow.component';

describe('WsbuynowComponent', () => {
  let component: WsbuynowComponent;
  let fixture: ComponentFixture<WsbuynowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WsbuynowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WsbuynowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
