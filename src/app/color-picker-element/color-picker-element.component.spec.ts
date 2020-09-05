import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerElementComponent } from './color-picker-element.component';

describe('ColorPickerElementComponent', () => {
  let component: ColorPickerElementComponent;
  let fixture: ComponentFixture<ColorPickerElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPickerElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPickerElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
