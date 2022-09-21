import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WesternTopsComponent } from './western-tops.component';

describe('WesternTopsComponent', () => {
  let component: WesternTopsComponent;
  let fixture: ComponentFixture<WesternTopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WesternTopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WesternTopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
