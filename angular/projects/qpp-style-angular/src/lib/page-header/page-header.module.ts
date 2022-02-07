import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header.component';
import { RouterModule } from '@angular/router';
import { CMSBreadcrumbsModule } from '../breadcrumbs/breadcrumbs.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule, CMSBreadcrumbsModule, FormsModule],
  declarations: [
    PageHeaderComponent
  ],
  exports: [ PageHeaderComponent ],
  entryComponents: [ PageHeaderComponent ]
})
export class CMSPageHeaderModule {
  static forRoot() {
    return {
      ngModule: CMSPageHeaderModule
    };
  }
}
