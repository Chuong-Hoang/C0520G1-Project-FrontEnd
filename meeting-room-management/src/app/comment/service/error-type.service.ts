import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorTypeService {

  public API = 'http://localhost:8080/errorType';


  constructor(public http: HttpClient) {
  }

  getAllErrorType(): Observable<any> {
    return this.http.get(this.API);
  }

}
