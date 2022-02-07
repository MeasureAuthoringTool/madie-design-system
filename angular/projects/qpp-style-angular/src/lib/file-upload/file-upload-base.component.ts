import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output
} from '@angular/core';
import { ErrorTypeHeader, FileErrorEvent } from './file-upload.model';

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileUploadBaseComponent {

  @Input()
  set accept(val: string) {
    this._accept = !!val ? val : this.hostElement?.accept;
  }


  get accept(): string {
    return this._accept;
  }

  get acceptedTypesList(): string[] {
    return this._accept?.split(',').map((s) => s.trim()) || [];
  }

  get hostElement(): HTMLInputElement {
    return this._elementRef.nativeElement;
  }

  constructor(private _elementRef: ElementRef) {}

  @Input() invalidTypesErrorMessage!: string;

  @Output()
  fileErrorEvent: EventEmitter<FileErrorEvent> = new EventEmitter<FileErrorEvent>();
  @Output() fileEvent: EventEmitter<File[]> = new EventEmitter<File[]>();

  private _accept: string;

  @HostListener('click', ['$event'])
  onClickEvent(event: Event): void {
    (event.target as HTMLInputElement).value = '';
  }

  onFile(files: FileList): void {
    if (files.length === 0) {
      this.fileEvent.emit(null);
    }

    const filesArray = Array.from(files);

    if (this.acceptedTypesList.length > 0 && filesArray.some((f) => !this.acceptedTypesList.includes(f.type))) {
      this.fileErrorEvent.emit({
        errorTitle: ErrorTypeHeader.FileUpload,
        errorDescription: this.invalidTypesErrorMessage,
      });
    } else {
      this.fileEvent.emit(filesArray);
    }
  }

  stopEvent(event: any): void {
    event.stopPropagation();
    event.preventDefault();
  }
}
