import { Component } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
  scss = `
    @import 'qppds.scss'; // from qpp-style
  `;

  basicHtml = `
    <cms-page-header
      [title]="'Test Title'"
      [selectedPerformanceYear]="2019"
      eyebrow="Eyebrow"
      [descriptions]="['Test Subtitle']"
      [containerClass]="'pad-h-100'"
      [hideSubheader]="true"
      [breadcrumbs]="[{
        title: 'External Link',
        url: 'http://google.com',
        external: true
      }, {
        title: 'Internal Link',
        url: 'test',
        queryParams: {
          age: 32
        }
      }]"
  >
  </cms-page-header>
  `;

  withOptionsHtml = `
    <cms-page-header
      [title]="'Test Title'"
      [descriptions]="['Test Subtitle 1', 'Test Subtitle 2', 'Test Subtitle 3']"
      [selectedPerformanceYear]="2019"
      [performanceYears]="[2017, 2018, 2019, 2020]"
      [noDescriptionMargins]="true"
      [breadcrumbs]="[{
        title: 'External Link',
        url: 'http://google.com',
        external: true
      }, {
        title: 'Internal Link',
        url: 'test',
        queryParams: {
          age: 32
        }
      }]"
      [containerClass]="'pad-h-100'"
    >
    <ng-container actions>
      <button class="qpp-c-button qpp-c-button--secondary qpp-c-button--icon-before qpp-u-xxs-margin-right--16 qpp-u-xs-margin-right--8 qpp-u-sm-margin-right--16 qpp-u-xxs-width--100 qpp-u-xs-width--auto"
      >
        Download Data
      </button>
      <button class="qpp-c-button qpp-c-button--secondary qpp-c-button--icon-after qpp-u-xxs-width--100 qpp-u-xs-width--auto"
      >
        Print
      </button>
    </ng-container>
  </cms-page-header>
  `;
}
