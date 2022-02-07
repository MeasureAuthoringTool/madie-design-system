import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FileErrorEvent } from '../file-upload.component';

@Component({
  selector: 'app-multiple-files-select',
  templateUrl: './multiple-files-select.component.html',
  styleUrls: ['./multiple-files-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultipleFilesSelectComponent {
  selectedFiles: File[];
  eventLogger = [];

  @ViewChild('fileInput', { read: ElementRef }) fileInput!: ElementRef;

  onFileSelectEvent(event: File[]): void {
    if (event) {
      this.selectedFiles = event;
      let name;
      if (this.selectedFiles.length === 1) {
        name = `file`;
      }
      if (this.selectedFiles.length > 1) {
        name = `files`;
      }
      this.eventLogger.push(`${this.selectedFiles.length} ${name} selected`);
    }
  }

  onFileErrorEvent(event: FileErrorEvent): void {
    this.eventLogger.push('file error');
    alert(`${event.errorTitle} ${event.errorDescription}`);
  }

  handleFileDialog(): void {
    this.eventLogger.push('button clicked');
    this.fileInput.nativeElement.click();
  }
}
