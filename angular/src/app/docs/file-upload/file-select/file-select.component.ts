import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { FileErrorEvent } from '../file-upload.component';

@Component({
  selector: 'app-file-select',
  templateUrl: './file-select.component.html',
  styleUrls: ['./file-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileSelectComponent {
  selectedFile: File[];
  eventLogger = [];

  @ViewChild('fileInput', { read: ElementRef }) fileInput!: ElementRef;

  onFileSelectEvent(event: File[]): void {
    if (event) {
      this.selectedFile = event;
      this.eventLogger.push('file select');
    }
  }

  onFileErrorEvent(event: FileErrorEvent): void {
    this.eventLogger.push('file error');
    alert(`${event.errorTitle} ${event.errorDescription}`);
  }

  handleFileDialog(): void {
    this.eventLogger.push('button clicked');
    this.fileInput?.nativeElement?.click();
  }
}
