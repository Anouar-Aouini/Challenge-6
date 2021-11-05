import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertisseurChildComponent } from './convertisseur-child.component';

describe('ConvertisseurChildComponent', () => {
  let component: ConvertisseurChildComponent;
  let fixture: ComponentFixture<ConvertisseurChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertisseurChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertisseurChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
