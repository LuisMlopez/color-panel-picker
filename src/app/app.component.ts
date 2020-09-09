import { Component, ElementRef } from '@angular/core';
import { Color } from './Color';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elementsNumber = 5 * 8;
  elementsArray = Array.from({ length: this.elementsNumber }, () => {return {color: '#fff', active: false}});
  colorHistory: string[] = [];

  colorPicked = '#15e56f';

  onPickerClicked(colorElement: Color) {
    colorElement.color = this.colorPicked;
    this.updateColorHistory();
  }

  onPickerClear(colorElement: Color) {
    colorElement.color = '#fff';
    this.updateColorHistory();
  }

  updateColorHistory() {
    this.colorHistory = this.elementsArray.map(
      colorElement => colorElement.color
    ).filter(
      (color, pos, self) => {
        return self.indexOf(color) === pos && color !== '#fff'
      }
    );
  }
}
