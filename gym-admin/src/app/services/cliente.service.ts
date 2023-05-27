import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { GLOBAL } from './GLOBAL';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public url;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  getClientes(): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this._http.get(this.url + 'cliente', { headers: headers });
  }

  getClienteById(id: string, token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this._http.get(this.url + 'cliente/'+id, { headers: headers });
  }

  addCliente(cliente: object, token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization': token});
    return this._http.post(this.url + 'cliente/', cliente, { headers: headers });
  }

  updateCliente(cliente: object, id: string, token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization': token});
    return this._http.put(this.url + 'cliente/'+id, cliente, { headers: headers });
  }
}
