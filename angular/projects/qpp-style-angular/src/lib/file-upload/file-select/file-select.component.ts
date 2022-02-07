import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { FileUploadBaseComponent } from '../file-upload-base.component';

@Component({
  selector: '[cms-file-select]',
  templateUrl: './file-select.component.html',
  styleUrls: ['./file-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileSelectComponent extends FileUploadBaseComponent {
  @HostListener('change', ['$event'])
  onFileSelectEvent(event: Event): void {
    this.stopEvent(event);

    const target = event.target as HTMLInputElement;
    this.onFile(target?.files);
  }
}
