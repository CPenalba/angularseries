import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Personaje } from '../models/personaje';

@Injectable()
export class ServiceSeries {
  constructor(private _http: HttpClient) {}

  getSeries(): Observable<any> {
    let request = 'api/series';
    let url = environment.urlApiSeries + request;
    return this._http.get(url);
  }

  getPersonajes(): Observable<any> {
    let request = 'api/personajes';
    let url = environment.urlApiSeries + request;
    return this._http.get(url);
  }

  findSerieById(idSerie: string): Observable<any> {
    let request = 'api/series/' + idSerie;
    let url = environment.urlApiSeries + request;
    return this._http.get(url);
  }

  findPersonajesByIdSerie(idSerie: string): Observable<any> {
    let request = 'api/Series/PersonajesSerie/' + idSerie;
    let url = environment.urlApiSeries + request;
    return this._http.get(url);
  }

  nuevoPersonaje(personaje: Personaje): Observable<any> {
    let json = JSON.stringify(personaje);
    let header = new HttpHeaders();
    header = header.set('Content-type', 'application/json');
    let request = 'api/personajes';
    let url = environment.urlApiSeries + request;
    return this._http.post(url, json, { headers: header });
  }
}
