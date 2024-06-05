import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecordatorioPage } from './recordatorio.page';

describe('RecordatorioPage', () => {
  let component: RecordatorioPage;
  let fixture: ComponentFixture<RecordatorioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordatorioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
