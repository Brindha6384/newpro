import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavmenComponent } from './favmen.component';

describe('FavmenComponent', () => {
  let component: FavmenComponent;
  let fixture: ComponentFixture<FavmenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavmenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
