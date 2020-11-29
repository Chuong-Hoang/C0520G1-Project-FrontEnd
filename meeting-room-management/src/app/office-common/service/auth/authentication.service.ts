import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = 'http://localhost:8080/login';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient ) { }

  login(credentials): Observable<any> {
    return this.http.post(API_URL, {
      username: credentials.username.trim(),
      password: credentials.password.trim()
    }, httpOptions);
  }
}
