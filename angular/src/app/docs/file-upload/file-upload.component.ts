import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

export interface FileErrorEvent {
  errorTitle: string;
  errorDescription: string;
}

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: [ './file-upload.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class FileUploadComponent {
  fileDragDropHtml = `
    <div
      class='file-upload-container'
      cms-file-drag-drop
      invalidTypesErrorMessage='Wrong file format! Accepted files are: .png, .zip '
      accept='image/png,application/zip'
      (fileDragEvent)='onFileDragEvent($event)'
      (fileEvent)='onFileDropEvent($event)'
      (fileErrorEvent)='onFileErrorEvent($event)'
    >
      <div>{{ droppedFile ? 'File Dropped' : 'Drag & Drop' }}</div>
    </div>

    <div *ngIf='droppedFile?.length > 0'>
      <div>name: {{ droppedFile[0]?.name }}</div>
      <div>type: {{ droppedFile[0]?.type }}</div>
      <div>size: {{ droppedFile[0]?.size }}</div>
      <div>last modified: {{ droppedFile[0]?.lastModified }}</div>
    </div>
  `;
  fileDragDropTs = `
    export class FileUploadComponent {
      droppedFile: File;
      eventLogger = [];

      onFileDragEvent(event: DragEvent): void {
        if (event && event.type === 'dragover') {
          this.eventLogger.push('file drag in');
        } else {
          this.eventLogger.push('file drag out');
        }
      }

      onFileDropEvent(event: File): void {
        if (event) {
          this.droppedFile = event;
          this.eventLogger.push('file drop');
        }
      }

      onFileErrorEvent(event: FileErrorEvent): void {
        this.eventLogger.push('file error');
      }
    }
  `;

  multipleFileDragDropHtml = `
    <input
      class='file-upload-container'
      cms-file-drag-drop
      invalidTypesErrorMessage='Wrong file format! Accepted files are: .png, .zip '
      accept='image/png,application/zip'
      (fileDragEvent)='onMultipleFilesDragEvent($event)'
      (fileEvent)='onMultipleFilesDropEvent($event)'
      (fileErrorEvent)='onFileErrorEvent($event)'
    />
    <div>{{ droppedFile ? 'File Dropped' : 'Drag & Drop' }}</div>

    <h3> Dropped Files</h3>
    <div *ngFor='let file of multipleDroppedFiles; let i = index'>
      <h5>File #{{ i + 1 }}</h5>
      <div>
        <div>name: {{ file?.name }}</div>
        <div>type: {{ file?.type }}</div>
        <div>size: {{ file?.size }}</div>
        <div>last modified: {{ file?.lastModified }}</div>
      </div>
    </div>
  `;
  multipleFileDragDropTs = `
    export class FileUploadComponent {
      multipleDroppedFiles: File[];
      multipleFilesEventLogger = [];
      eventLogger = [];

      onFileErrorEvent(event: FileErrorEvent): void {
        this.eventLogger.push('file error');
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
            name = ''file';
          }
          if (this.multipleDroppedFiles.length > 1) {
            name = 'files';
          }
        }
      }

      onMultipleFilesErrorEvent(event: FileErrorEvent): void {
        this.multipleFilesEventLogger.push('file error');
      }
    }
  `;


  fileSelectHtml = `
    <input
      #fileInput
      id='fileInput'
      type='file'
      accept='image/png,application/zip'
      cms-file-select
      invalidTypesErrorMessage='Wrong file format! Accepted files are: .png, .zip '
      (fileEvent)='onFileSelectEvent($event)'
      (fileErrorEvent)='onFileErrorEvent($event)'
    />

    <button cms-button (click)='handleFileDialog()'>Browse</button>

    <div *ngIf='selectedFile?.length > 0'>
      <div>name: {{ selectedFile[0]?.name }}</div>
      <div>type: {{ selectedFile[0]?.type }}</div>
      <div>size: {{ selectedFile[0]?.size }}</div>
      <div>last modified: {{ selectedFile[0]?.lastModified }}</div>
    </div>
  `;
  fileSelectTs = `
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
      }

      handleFileDialog(): void {
        this.eventLogger.push('button clicked');
        this.fileInput?.nativeElement?.click();
      }
    }
  `;
  fileSelectScss = `
    #fileInput {
      display: none;
    }
  `;

  multipleFileSelectHtml = `
    <input
      #fileInput
      id="fileInput"
      type="file"
      cms-file-select
      multiple
      accept="image/png,application/zip"
      invalidTypesErrorMessage='Wrong file format! Accepted files are: .png, .zip '
      (fileEvent)="onFileSelectEvent($event)"
      (fileErrorEvent)="onFileErrorEvent($event)"
    />

    <button cms-button (click)='handleFileDialog()'>Browse</button>

    <h3> Selected Files</h3>
    <div *ngFor='let file of selectedFiles; let i = index'>
      <h5>File #{{ i + 1 }}</h5>
      <div>
        <div>name: {{ file?.name }}</div>
        <div>type: {{ file?.type }}</div>
        <div>size: {{ file?.size }}</div>
        <div>last modified: {{ file?.lastModified }}</div>
      </div>
    </div>
  `;
  multipleFileSelectTs = `
    export class FileSelectComponent {
      selectedFiles: File[];
      eventLogger = [];

      @ViewChild('fileInput', { read: ElementRef }) fileInput!: ElementRef;

      onFileSelectEvent(event: File[]): void {
        if (event) {
          this.selectedFiles = event;
          let name;
          if (this.selectedFiles.length === 1) {
            name = \`file\`;
          }
          if (this.selectedFiles.length > 1) {
            name = \`files\`;
          }
        }
      }

      onFileErrorEvent(event: FileErrorEvent): void {
        this.eventLogger.push('file error');
      }

      handleFileDialog(): void {
        this.eventLogger.push('button clicked');
        this.fileInput.nativeElement.click();
      }
    }
  `;
  multipleFileSelectScss = `
    #fileInput {
      display: none;
    }
  `;
}
