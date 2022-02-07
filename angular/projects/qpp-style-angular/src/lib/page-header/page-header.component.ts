import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter, OnInit, ViewEncapsulation } from '@angular/core';
import { BreadcrumbItem } from '../breadcrumbs/models/breadcrumb.model';

@Component({
  selector: 'cms-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PageHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() descriptions: string[];
  @Input() breadcrumbs: BreadcrumbItem[];
  @Input() selectedPerformanceYear: number;
  @Input() performanceYears: number[];
  @Input() noDescriptionMargins: boolean;
  @Input() hideSubheader: boolean;
  @Input() containerClass: string;
  // This text appears above the title
  @Input() eyebrow: string;

  @Output() performanceYearSelected = new EventEmitter<number>();

  ngOnInit(): void {
    if (this.performanceYears?.length && !this.selectedPerformanceYear) {
      this.selectedPerformanceYear = this.performanceYears[this.performanceYears.length - 1];
    }
  }

  selectPerformanceYear(year: number): void {
    this.performanceYearSelected.emit(year);
  }
}
