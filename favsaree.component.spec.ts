import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavsareeComponent } from './favsaree.component';

describe('FavsareeComponent', () => {
  let component: FavsareeComponent;
  let fixture: ComponentFixture<FavsareeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavsareeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavsareeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
