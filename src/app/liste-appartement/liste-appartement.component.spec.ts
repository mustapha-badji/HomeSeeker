import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAppartementComponent } from './liste-appartement.component';

describe('ListeAppartementComponent', () => {
  let component: ListeAppartementComponent;
  let fixture: ComponentFixture<ListeAppartementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAppartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAppartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
