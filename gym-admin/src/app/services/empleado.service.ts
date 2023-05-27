import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { GLOBAL } from './GLOBAL';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  public url;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  login(data: object): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this._http.post(this.url + 'empleado/login', data, { headers: headers });
  }

  getEmpleadoById(id: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this._http.get(this.url + 'empleado/'+id, { headers: headers });
  }

}
