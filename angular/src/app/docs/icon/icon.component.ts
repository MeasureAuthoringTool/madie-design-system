import { Component } from '@angular/core';
import { Icons } from 'projects/qpp-style-angular/src/lib/icons/icons.model';
import { IconDimensions, IconPixelSizes } from 'projects/qpp-style-angular/src/lib/icons/models/icon.model';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  
  basicHtml = `
  <div class='qpp-u-display--flex qpp-u-flex-direction--row qpp-u-justify-content--around' >
    <div *ngFor="let icon of icons" class="blue-icon">
      <cms-icon [svg]='icon'></cms-icon>
    </div>
  </div>
  `;

  basicScss = ``;

  basicTs = ``;

  specificDimensionHtml = `
  <div class="qpp-u-display--flex qpp-u-flex-direction--row qpp-u-justify-content--around">
    <cms-icon svg='file-upload' [iconDimensions]="iconDimensions[0]"></cms-icon>
    <cms-icon svg='file-upload' [iconDimensions]="iconDimensions[1]"></cms-icon>
    <cms-icon svg='file-upload' [iconDimensions]="iconDimensions[2]"></cms-icon>
  </div>
`

  icons = Object.values(Icons);
  
  iconDimensions: IconDimensions[] = [{
    width: IconPixelSizes.Fifteen,
    height: IconPixelSizes.Fifteen
  }, {
    width: IconPixelSizes.TwentyFour,
    height: IconPixelSizes.TwentyFour
  }, {
    width: IconPixelSizes.Fifty,
    height: IconPixelSizes.Fifty
  }]

}
