import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { Color } from '../Color';

@Component({
  selector: 'app-color-picker-element',
  templateUrl: './color-picker-element.component.html',
  styleUrls: ['./color-picker-element.component.css']
})
export class ColorPickerElementComponent implements OnInit {
  @Output() onElementClicked =  new EventEmitter<Color>();
  @Output() onElementClear = new EventEmitter<Color>();

  @Input() colorElement: Color;

  constructor() { }

  ngOnInit(): void {
  }

  pickerClick() {
    this.onElementClicked.emit(this.colorElement);
  }

  clearPicker(event: MouseEvent) {
    event.preventDefault();
    this.onElementClear.emit(this.colorElement);
  }

}
