import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PastillaPage } from './pastilla.page';

describe('PastillaPage', () => {
  let component: PastillaPage;
  let fixture: ComponentFixture<PastillaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PastillaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
