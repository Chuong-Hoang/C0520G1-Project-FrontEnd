// @ts-ignore
import { Injectable } from '@angular/core';
// @ts-ignore
import {HttpClient} from '@angular/common/http';
// @ts-ignore
import {Observable} from 'rxjs';
import {Asset} from '../model.asset';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class AssetServerService {
  public Api = 'http://localhost:8080/assets';
  // public ApiDetail = 'http://localhost:8080/assets/detail/{id}';
  constructor(
    public http: HttpClient
  ) { }


  getAll(): Observable<Asset> {
    // @ts-ignore
    return this.http.get(this.Api);
  }

  getByID(idAsset): Observable<Asset> {
    console.log(idAsset);
    return this.http.get<Asset>(this.Api + '/detail/' + idAsset);
  }

  // tslint:disable-next-line:typedef
  create(asset) {
    return this.http.post(this.Api + '/create', asset);
  }


  //
  // edit(asset, assetId): Observable<Asset> {
  //   // @ts-ignore
  //   return this.http.put(this.Api + '/' + assetId, asset);
  // }


}
