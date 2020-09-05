import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elementsNumber = 5 * 8;
  elementsArray = Array.from({ length: this.elementsNumber });

  colorPicked;

  onColorPickerInputChange() {
    console.log(this.colorPicked)
  }
}
