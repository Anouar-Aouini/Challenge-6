import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertisseurParentComponent } from './convertisseur-parent.component';

describe('ConvertisseurParentComponent', () => {
  let component: ConvertisseurParentComponent;
  let fixture: ComponentFixture<ConvertisseurParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertisseurParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertisseurParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
