import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { GLOBAL } from './GLOBAL';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {

  public url;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  getEjercicios(): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this._http.get(this.url + 'ejercicio', { headers: headers });
  }

  addEjercicio(ejercicio: object, token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization': token});
    return this._http.post(this.url + 'ejercicio/', ejercicio, { headers: headers });
  }

  getEjercicioById(id: string, token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this._http.get(this.url + 'ejercicio/'+id, { headers: headers });
  }

  updateEjercicioById(ejercicio: object, id: string, token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this._http.put(this.url + 'ejercicio/'+id, ejercicio, { headers: headers });
  }

}
