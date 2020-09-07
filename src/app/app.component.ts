import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elementsNumber = 5 * 8;
  elementsArray = Array.from({ length: this.elementsNumber });

  colorPicked = '#15e56f';

  onColorPickerInputChange() {
    console.log(this.colorPicked)
  }

  onPickerClicked(pickerReference: ElementRef) {
    pickerReference.nativeElement.style.backgroundColor = this.colorPicked;
  }
}
