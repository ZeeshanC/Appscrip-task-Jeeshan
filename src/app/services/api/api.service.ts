import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public httpOptions: object = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  baseUrl = 'https://fakestoreapi.com/';

  constructor(
    public http: HttpClient
  ) { }

  getheaders(showError?) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    if (showError) {
      Object.assign(options, { params: { showError: showError } });
    }
    return options;
  }

  get(url, showError?): Observable<any> {
    const apiUrl = this.baseUrl + url;
    return this.http.get(apiUrl, this.getheaders(showError));
  }
}
