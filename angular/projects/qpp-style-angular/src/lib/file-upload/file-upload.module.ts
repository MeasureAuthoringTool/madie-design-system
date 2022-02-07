import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadBaseComponent } from './file-upload-base.component';
import { FileDragDropComponent } from './file-drag-drop/file-drag-drop.component';
import { FileSelectComponent } from './file-select/file-select.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FileUploadBaseComponent, FileDragDropComponent, FileSelectComponent],
  exports: [FileUploadBaseComponent, FileDragDropComponent, FileSelectComponent],
})
export class CMSFileUploadModule {}
