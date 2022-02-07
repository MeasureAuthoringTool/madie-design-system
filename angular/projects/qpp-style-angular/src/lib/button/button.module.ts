import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnchorComponent, ButtonComponent } from './button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, AnchorComponent],
  exports: [ButtonComponent, AnchorComponent],
})
export class CMSButtonModule {}
