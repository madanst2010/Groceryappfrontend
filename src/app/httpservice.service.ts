import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  httpOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/json').set('observe', 'response')
  };
  // url : string ="https://mgsuthar2010.pythonanywhere.com"
  url : string = "http://127.0.0.1:8000"
  constructor(private http: HttpClient) { }
  getProdutcs() : Observable<any> {
    let apiUrl = this.url + "/products";
    return this.http.get<any>(apiUrl)
  }
}
