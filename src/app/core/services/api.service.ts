import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  private getBaseUrl(): string {
    return environment.baseApiUrl;
  }

  get<T>(url: string)  {
    console.log(this.getBaseUrl() + url);
    return this.http.get<T>(this.getBaseUrl() + url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return throwError(errMessage);
    }
    return throwError(error || 'Node.js server error');
  }
}
