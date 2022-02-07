import { Component, OnInit, Input, TemplateRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {
  @Input() tabs: { name: string; examples: {
    html: string;
    scss: string;
    code?: string;
    content: TemplateRef<any>;
    documentation?: TemplateRef<any>;
  }[] }[];

  currentTabIdx = 0;
  currentExampleTabIdx = 0;

  updateTab(idx: number): void {
    this.currentTabIdx = idx;
  }

  updateExampleTab(idx: number): void {
    this.currentExampleTabIdx = idx;
  }
}
