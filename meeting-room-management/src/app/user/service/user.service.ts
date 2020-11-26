import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public API_USER = 'http://localhost:8080/user';
  public API_ROLE = 'http://localhost:8080/user/role-List';

  constructor(public http: HttpClient) {
  }

  getAllRole(): Observable<any> {
    return this.http.get(this.API_ROLE);
  }

  getAllUser(): Observable<any> {
    return this.http.get(this.API_USER);
  }

  getUserById(idUser): Observable<any> {
    return this.http.get(this.API_USER + '/' + idUser);
  }

  deleteUserById(idUser): Observable<any> {
    return this.http.delete(this.API_USER + '/delete/' + idUser);
  }

  addNewUser(user): Observable<any> {
    console.log(user);
    return this.http.post(this.API_USER + '/create', user);
  }

  editUser(idUser, user): Observable<any> {
    return this.http.put(this.API_USER + '/edit/' + idUser, user);
  }

  changePassword(idUser, password): Observable<any> {
    return this.http.put(this.API_USER + '/' + idUser + '/change-password', password);
  }

}
