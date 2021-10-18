import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  PUBLIC_KEY = '5443a2a01113e0b7b073467163ee297d';
  HASH = '72601E8888707FCCDEFF0B64CD1BC659';
  URL_API = `https://gateway.marvel.com:443/v1/public/characters?apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(this.URL_API)
      .pipe(map((data: any) => data.data.results));
  }
}
