import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IconsService } from './icons.service';
import { Icons } from './icons.model';
import { IconDimensions, IconPixelSizes, IconSize } from './models/icon.model';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'cms-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @ViewChild('matIcon') icon: ElementRef;
  @Input() svg?: Icons;
  @Input()
  set size(size: IconSize) {
    if (!!size) {
      this._iconClass.add(`${this.iconClass}-${size}`);
    }
  }

  @Input() set iconDimensions(dimensions: IconDimensions) {
    if (!dimensions) {
      return;
    }

    this._iconClass.add(`qpp-u-width--${dimensions.width}px`);
    this._iconClass.add(`qpp-u-height--${dimensions.height}px`);
  }

  // using as set to prevent class duplication that might causes ngClass converting the array into wrong string
  private _iconClass = new Set();

  get iconClass() {
    return [...this._iconClass];
  }

  constructor(private _iconsService: IconsService) {
    this._iconsService.loadIcons();
    this._iconClass.add('qpp-c-button-icon');
  }
}
