import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker-element',
  templateUrl: './color-picker-element.component.html',
  styleUrls: ['./color-picker-element.component.css']
})
export class ColorPickerElementComponent implements OnInit {
  @ViewChild('picker') pickerDiv: ElementRef;
  @Output() onPickerClicked =  new EventEmitter<ElementRef>();

  constructor() { }

  ngOnInit(): void {
  }

  onPickerClick() {
    this.onPickerClicked.emit(this.pickerDiv);
  }

  clearPicker(event: MouseEvent) {
    event.preventDefault();
    this.pickerDiv.nativeElement.style.backgroundColor = '#ffff';
  }

}
