import { HttpEventType, HttpHeaders } from '@angular/common/http';

export interface AppError {
  error?: any;
  headers?: HttpHeaders;
  message?: string;
  name?: string;
  ok?: boolean;
  status?: number;
  statusText?: string;
  type?: HttpEventType.ResponseHeader | HttpEventType.Response;
  url?: string;
}
