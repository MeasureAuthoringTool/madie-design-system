
import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  scss = `
    @import 'qppds.scss'; // from qpp-style
  `;

  basicHtml = `
    <cms-breadcrumbs
      [breadcrumbs]="breadcrumbs"
    >
    </cms-breadcrumbs>
  `;

  breadcrumbs = [
    {
      url: 'fake/url/1',
      title: 'Page 1',
      queryParams: { 'valid': 'true' },
      external: true,
    },
    {
      url: 'fake/url/2',
      title: 'Page 2',
    },
    {
      url: 'fake/url/3',
      title: 'Page 3',
      external: true,
    }
  ]
}
