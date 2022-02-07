import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FileErrorEvent } from '../file-upload.component';

@Component({
  selector: 'app-file-drag-drop',
  templateUrl: './file-drag-drop.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileDragDropComponent {
  droppedFile: File[];
  eventLogger = [];

  onFileDragEvent(event: DragEvent): void {
    if (event && event.type === 'dragover') {
      this.eventLogger.push('file drag in');
    } else {
      this.eventLogger.push('file drag out');
    }
  }

  onFileDropEvent(event: File[]): void {
    if (event) {
      this.droppedFile = event;
      this.eventLogger.push('file drop');
    }
  }

  onFileErrorEvent(event: FileErrorEvent): void {
    this.eventLogger.push('file error');
    alert(`${ event.errorTitle } ${ event.errorDescription }`);
  }
}
