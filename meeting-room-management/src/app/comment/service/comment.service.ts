import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommentService {
  public API = 'http://localhost:8080/comment';
  public idErrorType: number;

  constructor(public http: HttpClient) {
  }

  getAllComment(): Observable<any> {
    return this.http.get(this.API);
  }

  addNewComment(comment): Observable<any> {
    console.log(comment);
    return this.http.post(this.API, comment);
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

  search(a: string, b: string, c: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('value1', a);
    params = params.append('value2', b);
    params = params.append('value3', c);
    return this.http.get(this.API + '/search', {params});
  }

  deleteCommentByID(idComment): Observable<any> {
    return this.http.delete(this.API + '/' + idComment);
  }
}
