import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { GLOBAL } from './GLOBAL';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  public url;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  getTests(): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this._http.get(this.url + 'test', { headers: headers });
  }

  addTest(test: object, token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization': token});
    return this._http.post(this.url + 'test/', test, { headers: headers });
  }

  getTestById(id: string, token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this._http.get(this.url + 'test/'+id, { headers: headers });
  }

  updateTestById(test: object, id: string, token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this._http.put(this.url + 'test/'+id, test, { headers: headers });
  }

  getTipos(): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this._http.get(this.url + 'test/tipos', { headers: headers });
  }

  addEjercicioByTest(ejercicio: object, id: string, token: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization': token});
    return this._http.post(this.url + 'test/addEjercicio/'+id, ejercicio, { headers: headers });
  }  

  getEjerciciosByTest(id: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this._http.get(this.url + 'test/getEjercicio/'+id, { headers: headers });
  }

}
