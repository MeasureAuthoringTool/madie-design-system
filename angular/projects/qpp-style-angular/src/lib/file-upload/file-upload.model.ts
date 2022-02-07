export interface FileErrorEvent {
  errorTitle: string;
  errorDescription: string;
}

export enum ErrorTypeHeader {
  FileUpload = 'Failed to Upload File',
}
