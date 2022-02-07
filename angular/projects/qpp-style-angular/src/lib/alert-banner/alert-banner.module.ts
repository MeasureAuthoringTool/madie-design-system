import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlertBannerComponent } from './alert-banner.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    AlertBannerComponent
  ],
  exports: [ AlertBannerComponent ],
})
export class CMSAlertBannerModule {}
