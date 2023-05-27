import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { GLOBAL } from './GLOBAL';

@Injectable({
  providedIn: 'root'
})
export class EntrenadoresService {

  public url;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  getEntrenadores(token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization': token});
    return this._http.get(this.url + 'entrenador', { headers: headers });
  }

  getEntrenadorById(id: string, token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization': token});
    return this._http.get(this.url + 'entrenador/' + id, { headers: headers });
  }

  updateEntrenadorById(entrenador: object, id: string, token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization': token});
    return this._http.put(this.url + 'entrenador/' + id, entrenador, { headers: headers });
  }

  addEntrenador(entrenador: object, token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization': token});
    return this._http.post(this.url + 'entrenador/', entrenador, { headers: headers });
  }
}
