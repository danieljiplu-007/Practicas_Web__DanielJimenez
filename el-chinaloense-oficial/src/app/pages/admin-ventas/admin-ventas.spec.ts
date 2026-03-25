import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVentas } from './admin-ventas';

describe('AdminVentas', () => {
  let component: AdminVentas;
  let fixture: ComponentFixture<AdminVentas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminVentas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminVentas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
