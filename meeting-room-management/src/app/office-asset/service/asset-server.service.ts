import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Asset} from '../model.asset';

@Injectable({
  providedIn: 'root'
})
export class AssetServerService {
  public Api = 'http://localhost:8080/assets';

  constructor(
    public http: HttpClient
  ) {
  }


  getAll(): Observable<Asset> {
    // @ts-ignore
    return this.http.get(this.Api);
  }

  getByID(idAsset): Observable<Asset> {
    console.log(idAsset);
    return this.http.get<Asset>(this.Api + '/detail/' + idAsset);
  }

  create(asset): Observable<any> {
    console.log('service' + asset);
    return this.http.post(this.Api + '/create', asset);
  }


  //
  // edit(asset, assetId): Observable<Asset> {
  //   // @ts-ignore
  //   return this.http.put(this.Api + '/' + assetId, asset);
  // }


}
