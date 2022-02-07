import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDragDropComponent } from './file-drag-drop.component';
import { Component, Input } from '@angular/core';
import { CMSFileUploadModule } from '../../../public_api';
import { FileErrorEvent } from '../../../../../../src/app/docs/file-upload/file-upload.component';

describe('FileDragDropComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  let fileDragEventSpy: jasmine.SpyObj<any>;
  let fileDropEventSpy: jasmine.SpyObj<any>;
  let fileDropErrorEventSpy: jasmine.SpyObj<any>;
  let stopPropagationSpy: jasmine.SpyObj<any>;
  let preventDefaultSpy: jasmine.SpyObj<any>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ FileDragDropComponent, TestHostComponent ],
      imports: [ CMSFileUploadModule ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fileDragEventSpy = spyOn(component, 'onFileDragEvent').and.callThrough();
    fileDropEventSpy = spyOn(component, 'onFileEvent').and.callThrough();
    fileDropErrorEventSpy = spyOn(component, 'onFileErrorEvent').and.callThrough();
  });

  function createDragEvent(type: string, dataTransfer: any): DragEvent {
    const dragEvent: any = new Event(type);
    dragEvent.dataTransfer = dataTransfer;
    return dragEvent as DragEvent;
  }

  function createEventSpies(event: Event): void {
    stopPropagationSpy = spyOn(event, 'stopPropagation');
    preventDefaultSpy = spyOn(event, 'preventDefault');
  }

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should emit events on dragover', () => {
    component.accept = 'image/png,application/zip';
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('[cms-file-drag-drop]') as HTMLElement;
    const event = createDragEvent('dragover', {
      effectAllowed: 'test',
      dropEffect: 'test'
    } as any);
    createEventSpies(event);
    input.dispatchEvent(event as DragEvent);

    expect(stopPropagationSpy).toHaveBeenCalled();
    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(fileDragEventSpy).toHaveBeenCalledWith(event);
  });

  it('should emit events on dragleave', () => {
    const input = fixture.nativeElement.querySelector('[cms-file-drag-drop]') as HTMLElement;
    const event = createDragEvent('dragleave', {
      effectAllowed: 'test',
      dropEffect: 'test'
    } as any);
    createEventSpies(event);
    input.dispatchEvent(event as DragEvent);

    expect(stopPropagationSpy).toHaveBeenCalled();
    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(fileDragEventSpy).toHaveBeenCalledWith(event);
  });

  it('should emit events on drop', () => {
    const file = new File([ '' ], 'filename.csv', {
      type: 'text/csv',
      lastModified: 1
    });
    const event = createDragEvent('drop', {
      files: [ file ],
      effectAllowed: 'test',
      dropEffect: 'test'
    });
    createEventSpies(event);
    const input = fixture.nativeElement.querySelector('[cms-file-drag-drop]') as HTMLElement;
    input.dispatchEvent(event as DragEvent);

    expect(stopPropagationSpy).toHaveBeenCalled();
    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('should emit fileDropEvent on drop without error', () => {
    component.accept = 'image/png,application/zip';
    fixture.detectChanges();
    const file = new File([ '' ], 'filename.csv', {
      type: 'image/png',
      lastModified: 1
    });
    const event = createDragEvent('drop', {
      files: [ file ],
      effectAllowed: 'test',
      dropEffect: 'test'
    });
    const input = fixture.nativeElement.querySelector('[cms-file-drag-drop]') as HTMLElement;
    input.dispatchEvent(event as DragEvent);

    expect(fileDropEventSpy).toHaveBeenCalled();
  });

  it('should emit fileDropErrorEvent on drop with error', () => {
    component.accept = 'image/png,application/zip';
    component.invalidTypesErrorMessage = 'error description';
    fixture.detectChanges();
    const file = new File([ '' ], 'filename.txt', {
      type: 'text/plain',
      lastModified: 1
    });
    const event = createDragEvent('drop', {
      files: [ file ],
      effectAllowed: 'test',
      dropEffect: 'test'
    });
    const input = fixture.nativeElement.querySelector('[cms-file-drag-drop]') as HTMLElement;
    input.dispatchEvent(event as DragEvent);

    expect(fileDropEventSpy).not.toHaveBeenCalled();
    expect(fileDropErrorEventSpy).toHaveBeenCalledWith({
      errorTitle: 'Failed to Upload File',
      errorDescription: 'error description'
    });
  });
});

@Component({
  template: `
    <div
      cms-file-drag-drop
      #fileDragDrop
      [accept]='accept'
      [invalidTypesErrorMessage]='invalidTypesErrorMessage'
      (fileEvent)='onFileEvent($event)'
      (fileDragEvent)='onFileDragEvent($event)'
      (fileErrorEvent)='onFileErrorEvent($event)'>hello
    </div>
  `
})
class TestHostComponent {
  @Input() accept: string;
  @Input() invalidTypesErrorMessage: string;

  onFileEvent(event: File[]): void {
  }

  onFileDragEvent(event: DragEvent): void {
  }

  onFileErrorEvent(event: FileErrorEvent): void {
  }
}
