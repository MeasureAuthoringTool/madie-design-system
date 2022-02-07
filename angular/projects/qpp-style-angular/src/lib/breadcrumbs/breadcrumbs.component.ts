import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { BreadcrumbItem } from './models/breadcrumb.model';

@Component({
  selector: 'cms-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent {
  @Input() breadcrumbs: BreadcrumbItem[] = [];
}
