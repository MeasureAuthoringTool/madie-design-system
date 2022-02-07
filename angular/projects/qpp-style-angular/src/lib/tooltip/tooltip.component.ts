import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cms-tooltip',
  templateUrl: './tooltip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipComponent {
  @Input() position: string;
  @Input() text: string;
  @Input() body: boolean;
  @Input() offset: string;
  @Input() customClass: string;

  get tooltipClass(): string {
    const bodyClass = this.body ? ' tool-tip--body' : '';
    const customClass = this.customClass ? ` ${this.customClass}` : '';
    const offsetClass = this.offset
      ? ` tool-tip--offset-${this.offset}-${
          this.position ? this.position : 'top'
        }`
      : '';

    if (this.position) {
      switch (this.position) {
        case 'top':
          return `tool-tip--top${bodyClass}${customClass}${offsetClass}`;
        case 'bottom':
          return `tool-tip--bottom${bodyClass}${customClass}${offsetClass}`;
        case 'right':
          return `tool-tip--right${bodyClass}${customClass}${offsetClass}`;
        case 'left':
          return `tool-tip--left${bodyClass}${customClass}${offsetClass}`;
      }
    }

    return `tool-tip--top${bodyClass}${customClass}${offsetClass}`;
  }
}
