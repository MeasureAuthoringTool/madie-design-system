import { TooltipComponent } from './docs/tooltip/tooltip.component';
import { ScoreChartComponent } from './docs/score-chart/score-chart.component';
import { PageHeaderComponent } from './docs/page-header/page-header.component';
import { BreadcrumbsComponent } from './docs/breadcrumbs/breadcrumbs.component';
import { ModalComponent } from './docs/modal/modal.component';
import { ButtonComponent } from './docs/button/button.component';
import { FileUploadComponent } from './docs/file-upload/file-upload.component';
import { AlertBannerComponent  } from './docs/alert-banner/alert-banner.component';
import { IconComponent } from './docs/icon/icon.component';

export const appRoutes = [
  {
    name: 'Tooltip Directive',
    path: 'tooltip',
    component: TooltipComponent,
  },
  {
    name: 'Score Chart Directive',
    path: 'score-chart',
    component: ScoreChartComponent,
  },
  {
    name: 'Page Header Component',
    path: 'page-header',
    component: PageHeaderComponent,
  },
  {
    name: 'Breadcrumbs Component',
    path: 'breadcrumbs',
    component: BreadcrumbsComponent,
  },
  {
    name: 'Button Component',
    path: 'button',
    component: ButtonComponent,
  },
  {
    name: 'Modal Component',
    path: 'modal',
    component: ModalComponent,
  },
  {
    name: 'File Upload Directives',
    path: 'file-upload',
    component: FileUploadComponent,
  },
  {
    name: 'Alert Banner Component',
    path: 'alert-banner',
    component: AlertBannerComponent
  },
  {
    name: 'Icon Component',
    path: 'icon',
    component: IconComponent,
  },
].sort((a, b) => (a.name < b.name ? -1 : 1));
