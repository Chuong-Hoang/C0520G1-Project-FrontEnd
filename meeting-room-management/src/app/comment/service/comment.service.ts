import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
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
  getAllNotification(userName): Observable<any> {
    return this.http.get(this.API + '/notification/' + userName);
  }

  addNewComment(comment): Observable<any> {
    return this.http.post(this.API + '/create', comment);
  }
  addNewNotification(comment): Observable<any> {
    return this.http.post(this.API + '/create/notification', comment);
  }

  getCommentById(idComment): Observable<any> {
    return this.http.get(this.API + '/' + idComment);
  }

  handleComment(idComment, comment): Observable<any> {
    console.log(comment);
    return this.http.put(this.API + '/' + idComment, comment);
  }

  detailComment(idComment, comment): Observable<any> {
    return this.http.put(this.API + '/detail/' + idComment, comment);
  }

  search(userNameSearch: string, roomNameSearch: string, statusSearch: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('value1', userNameSearch);
    params = params.append('value2', roomNameSearch);
    params = params.append('value3', statusSearch);
    return this.http.get(this.API + '/search', {params});
  }

  deleteCommentByID(idComment): Observable<any> {
    return this.http.delete(this.API + '/delete/' + idComment);
  }
}
