import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';
import {
  CMSBreadcrumbsModule,
  CMSButtonModule,
  CMSModalModule,
  CMSPageHeaderModule,
  CMSScoreChartModule,
  CMSTooltipModule,
  CMSAlertBannerModule,
  CMSIconsModule,
} from 'projects/qpp-style-angular/src/public_api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipComponent } from './docs/tooltip/tooltip.component';
import { TabsComponent } from './shared/tabs/tabs.component';
import { ScoreChartComponent } from './docs/score-chart/score-chart.component';
import { PageHeaderComponent } from './docs/page-header/page-header.component';
import { BreadcrumbsComponent } from './docs/breadcrumbs/breadcrumbs.component';
import { ModalComponent } from './docs/modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './docs/button/button.component';
import { FileUploadComponent } from './docs/file-upload/file-upload.component';
import { CMSFileUploadModule } from '../../projects/qpp-style-angular/src/lib/file-upload/file-upload.module';
import { FileSelectComponent } from './docs/file-upload/file-select/file-select.component';
import { MultipleFilesSelectComponent } from './docs/file-upload/multiple-files-select/multiple-files-select.component';
import { FileDragDropComponent } from './docs/file-upload/file-drag-drop/file-drag-drop.component';
import { MultipleFilesDragDropComponent } from './docs/file-upload/multiple-files-drag-drop/multiple-files-drag-drop.component';
import { AlertBannerComponent } from './docs/alert-banner/alert-banner.component';
import { IconComponent } from './docs/icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    TooltipComponent,
    TabsComponent,
    ScoreChartComponent,
    PageHeaderComponent,
    BreadcrumbsComponent,
    ModalComponent,
    ButtonComponent,
    FileUploadComponent,
    FileSelectComponent,
    MultipleFilesSelectComponent,
    FileDragDropComponent,
    MultipleFilesDragDropComponent,
    AlertBannerComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HighlightModule,
    CMSAlertBannerModule,
    CMSScoreChartModule,
    CMSTooltipModule,
    CMSPageHeaderModule,
    CMSBreadcrumbsModule,
    CMSButtonModule,
    CMSModalModule,
    CMSIconsModule,
    CMSFileUploadModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/highlight'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml'),
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
