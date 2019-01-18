import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerKategoriComponent } from './per-kategori.component';

describe('PerKategoriComponent', () => {
  let component: PerKategoriComponent;
  let fixture: ComponentFixture<PerKategoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerKategoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerKategoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
