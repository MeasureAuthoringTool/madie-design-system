import { Component } from '@angular/core';
import { AlertBanner, AlertBannerType } from 'projects/qpp-style-angular/src/public_api';

@Component({
  selector: 'app-alert-banner',
  templateUrl: './alert-banner.component.html',
  styleUrls: ['./alert-banner.component.scss']
})
export class AlertBannerComponent {
  imports = `
    import { AlertBanner, AlertBannerType } '@cmsgov/qpp-style-angular'; // Angular.x

    @import 'qppds.scss'; // from qpp-style scss
  `;

  basicHtml = `
  Banner -  
    <cms-alert-banner [alertBanner]="informationBanner"></cms-alert-banner>
  `;

  banners: AlertBanner[] = [{
    title: 'Information Banner',
    type: AlertBannerType.Info
  }, {
    title: 'Warning Banner',
    type: AlertBannerType.Warning
  }, {
    title: 'Error Banner',
    type: AlertBannerType.Error
  }, {
    title: 'Success Banner',
    type: AlertBannerType.Success
  }, {
    type: AlertBannerType.Info
  }];
}
