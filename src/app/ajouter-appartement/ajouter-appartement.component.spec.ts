import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAppartementComponent } from './ajouter-appartement.component';

describe('AjouterAppartementComponent', () => {
  let component: AjouterAppartementComponent;
  let fixture: ComponentFixture<AjouterAppartementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterAppartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterAppartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
