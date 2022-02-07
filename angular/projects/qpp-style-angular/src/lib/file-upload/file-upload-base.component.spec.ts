import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadBaseComponent } from './file-upload-base.component';
import { CMSFileUploadModule } from '../../public_api';

describe('FileUploadBaseComponent', () => {
  let component: FileUploadBaseComponent;
  let fixture: ComponentFixture<FileUploadBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploadBaseComponent ],
      imports: [CMSFileUploadModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the accept and get the acceptedTypesList', () => {
    component.accept = 'image/png,application/zip';
    fixture.detectChanges();
    expect(component.acceptedTypesList).toEqual([ 'image/png', 'application/zip' ]);
  });
});
