import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { AngularMaterialModule } from '../angular-material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    IconComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    HttpClientModule,
  ],
  exports: [
    IconComponent
  ]
})
export class CMSIconsModule { }
