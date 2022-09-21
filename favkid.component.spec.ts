import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavkidComponent } from './favkid.component';

describe('FavkidComponent', () => {
  let component: FavkidComponent;
  let fixture: ComponentFixture<FavkidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavkidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavkidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
