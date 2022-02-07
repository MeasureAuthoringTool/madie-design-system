import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { FileUploadBaseComponent } from '../file-upload-base.component';

@Component({
  selector: '[cms-file-drag-drop]',
  templateUrl: './file-drag-drop.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileDragDropComponent extends FileUploadBaseComponent {
  @Output() fileDragEvent: EventEmitter<DragEvent> = new EventEmitter<
    DragEvent
    >();

  @HostListener('dragover', ['$event'])
  @HostListener('dragleave', ['$event'])
  onDrag(event: DragEvent): void {
    this.stopEvent(event);
    this.fileDragEvent.emit(event);
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent): void {
    this.stopEvent(event);

    const files = event?.dataTransfer?.files;

    this.onFile(files);
  }
}
