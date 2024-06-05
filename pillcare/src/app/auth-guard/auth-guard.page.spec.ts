import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthGuardPage } from './auth-guard.page';

describe('AuthGuardPage', () => {
  let component: AuthGuardPage;
  let fixture: ComponentFixture<AuthGuardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthGuardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
