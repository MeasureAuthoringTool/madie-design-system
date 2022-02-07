import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Icons } from './icons.model';

@Injectable({
  providedIn: 'root'
})
export class IconsService {

  private readonly ASSETS_PATH = 'assets/svg';
  private _iconsLoaded: boolean;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  loadIcons(): void {
    if (!this._iconsLoaded) {
      Object.values(Icons).forEach(key => {
        this.matIconRegistry.addSvgIcon(key, this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.ASSETS_PATH}/${key}.svg`));
      });
      this._iconsLoaded = true;
    }
  }
}
