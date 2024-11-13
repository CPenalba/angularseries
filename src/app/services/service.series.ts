import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class ServiceSeries {
  constructor(private _http: HttpClient) {}

  getSeries(): Observable<any> {
    let request = 'api/series';
    let url = environment.urlApiSeries + request;
    return this._http.get(url);
  }

  findSerieById(idSerie: string): Observable<any> {
    let request = 'api/series/' + idSerie;
    let url = environment.urlApiSeries + request;
    return this._http.get(url);
  }
}
