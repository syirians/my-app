import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKategoriComponent } from './list-kategori.component';

describe('ListKategoriComponent', () => {
  let component: ListKategoriComponent;
  let fixture: ComponentFixture<ListKategoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListKategoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKategoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
