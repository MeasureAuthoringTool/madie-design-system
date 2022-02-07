import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileSelectComponent } from './file-select.component';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FileErrorEvent } from '../../../../../../src/app/docs/file-upload/file-upload.component';
import { CMSFileUploadModule } from '../file-upload.module';
import { By } from '@angular/platform-browser';

describe('FileSelectComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  let fileSelectEventSpy: jasmine.SpyObj<any>;
  let fileSelectErrorEventSpy: jasmine.SpyObj<any>;
  let handleButtonClickSpy: jasmine.SpyObj<any>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileSelectComponent, TestHostComponent ],
      imports: [ CMSFileUploadModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    handleButtonClickSpy = spyOn(component, 'handleButtonClick').and.callThrough();
    fileSelectEventSpy = spyOn(component, 'onFileEvent').and.callThrough();
    fileSelectErrorEventSpy = spyOn(component, 'onFileErrorEvent').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make the expected calls when for the input when clicking on button', () => {
    const clickEvent = new Event('click');
    const button = fixture.debugElement.query(By.css('#browse-button'));
    const fileInput = fixture.debugElement.query(By.css('#fileInput'));
    button.nativeElement.dispatchEvent(clickEvent);
    fixture.detectChanges();
    expect(handleButtonClickSpy).toHaveBeenCalled();
    expect(fileInput.nativeElement.value).toEqual('');
  });

  it('should handle file change over input', () => {
    const changeEvent = new Event('change');
    const fileInput = fixture.debugElement.query(By.css('#fileInput'));
    fileInput.nativeElement.dispatchEvent(changeEvent);
    fixture.detectChanges();
    expect(fileInput.nativeElement.files.length).toEqual(0);
  });
});

@Component({
  template: `
    <input
      #fileInput
      id="fileInput"
      type="file"
      accept="image/png,application/zip"
      cms-file-select
      invalidTypesErrorMessage='Wrong file format! Accepted files are: .png, .zip '
      (fileEvent)="onFileEvent($event)"
      (fileErrorEvent)="onFileErrorEvent($event)"
    />

    <button cms-button id='browse-button' (click)='handleButtonClick()'>Browse</button>
  `
})
class TestHostComponent {
  @Input() accept: string;
  @Input() invalidTypesErrorMessage: string;

  @ViewChild('fileInput', { read: ElementRef }) fileInput!: ElementRef;


  onFileEvent(event: File[]): void {
  }

  onFileErrorEvent(event: FileErrorEvent): void {
  }

  handleButtonClick(): void {
    this.fileInput?.nativeElement?.click();
  }
}
