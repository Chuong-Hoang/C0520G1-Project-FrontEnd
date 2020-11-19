import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Asset} from '../model.asset';

@Injectable({
  providedIn: 'root'
})
export class AssetServerService {
  public Api = 'http://localhost:8080/asset';
  constructor(
    public http: HttpClient
  ) { }


  getAll(): Observable<Asset> {
    // @ts-ignore
    return this.http.get(this.Api);
  }

  // tslint:disable-next-line:typedef
  create(asset) {
    return this.http.post(this.Api, asset);
  }

  // tslint:disable-next-line:typedef
  getByID(assetId) {
    return this.http.get(this.Api + '/' + assetId);
  }



  edit(asset, assetId): Observable<Asset> {
    // @ts-ignore
    return this.http.put(this.Api + '/' + assetId, asset);
  }


}
