import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { A11yModule } from '@angular/cdk/a11y';

const modulesList = [MatIconModule, MatDialogModule, A11yModule];

@NgModule({
  imports: modulesList,
  exports: modulesList,
})
export class AngularMaterialModule {}
