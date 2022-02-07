import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { AngularMaterialModule } from '../angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { CMSButtonModule } from '../button/button.module';
import { CMSIconsModule } from '../icons/icons.module';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, AngularMaterialModule, HttpClientModule, CMSButtonModule, CMSIconsModule],
  exports: [ModalComponent],
  entryComponents: [ModalComponent],
})
export class CMSModalModule {}
