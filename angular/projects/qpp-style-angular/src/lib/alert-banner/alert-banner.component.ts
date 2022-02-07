import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { AlertBanner } from './models/alert-banner.model';

@Component({
  selector: 'cms-alert-banner',
  templateUrl: './alert-banner.component.html',
  styleUrls: ['./alert-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertBannerComponent {
  @Input() alertBanner: AlertBanner;
}
