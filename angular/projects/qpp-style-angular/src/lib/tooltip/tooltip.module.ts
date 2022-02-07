import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './tooltip.directive';
import { TooltipComponent } from './tooltip.component';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
  imports: [CommonModule, A11yModule],
  declarations: [TooltipDirective, TooltipComponent],
  exports: [TooltipDirective],
  entryComponents: [TooltipComponent],
})
export class CMSTooltipModule {}
