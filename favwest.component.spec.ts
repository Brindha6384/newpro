import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavwestComponent } from './favwest.component';

describe('FavwestComponent', () => {
  let component: FavwestComponent;
  let fixture: ComponentFixture<FavwestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavwestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavwestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
