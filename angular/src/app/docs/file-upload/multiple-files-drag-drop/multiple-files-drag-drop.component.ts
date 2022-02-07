import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FileErrorEvent } from '../file-upload.component';

@Component({
  selector: 'app-multiple-files-drag-drop',
  templateUrl: './multiple-files-drag-drop.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultipleFilesDragDropComponent {
  multipleDroppedFiles: File[];
  multipleFilesEventLogger = [];
  eventLogger = [];

  onFileErrorEvent(event: FileErrorEvent): void {
    this.eventLogger.push('file error');
    alert(`${ event.errorTitle } ${ event.errorDescription }`);
  }

  onMultipleFilesDragEvent(event: DragEvent): void {
    if (event && event.type === 'dragover') {
      this.multipleFilesEventLogger.push('file drag in');
    } else {
      this.multipleFilesEventLogger.push('file drag out');
    }
  }

  onMultipleFilesDropEvent(event: File[]): void {
    if (event) {
      this.multipleDroppedFiles = event;
      let name;
      if (this.multipleDroppedFiles.length === 1) {
        name = `file`;
      }
      if (this.multipleDroppedFiles.length > 1) {
        name = `files`;
      }
      this.eventLogger.push(`${this.multipleDroppedFiles.length} ${name} dropped`);
    }
  }

  onMultipleFilesErrorEvent(event: FileErrorEvent): void {
    this.multipleFilesEventLogger.push('file error');
    alert(`${ event.errorTitle } ${ event.errorDescription }`);
  }
}
