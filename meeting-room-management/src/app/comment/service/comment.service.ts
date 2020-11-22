import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  public API = 'http://localhost:8080/comment';

  constructor(public http: HttpClient) {
  }

  getAllComment(): Observable<any> {
    return this.http.get(this.API);
  }

  // addNewCustomer(customer): Observable<any> {
  //   return this.http.post(this.API, customer)
  // }
  //
  // getCustomerByID(customerId): Observable<any> {
  //   return this.http.get(this.API + '/' +customerId)
  // }
  // deleteCustomerByID(customerId): Observable<any> {
  //   return this.http.delete(this.API + '/' +customerId)
  // }
  // editCustomer(customer,customerId): Observable<any> {
  //   return this.http.put(this.API + '/' +customerId,customer)
  // }
}
