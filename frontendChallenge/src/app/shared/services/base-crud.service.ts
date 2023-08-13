import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BaseCRUDService {
  constructor(
    public _http: HttpClient,
  ) {}

  get(url:string): Observable<any> {
    return this._http.get(url);
  }

  post(url :string, body = {}): Observable<any> {
    return this._http.post(url, body);
  }

  put(url :string, body = {}): Observable<any> {
    return this._http.put(url, body);
  }

  delete(url:string): Observable<any> {
    return this._http.delete(url);
  }
}
