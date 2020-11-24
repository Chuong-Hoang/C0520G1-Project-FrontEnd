import {Injectable} from '@angular/core';
import {HttpClient , HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Asset} from '../model/model.asset';

@Injectable({
  providedIn: 'root'
})
export class AssetServerService {
  public API = 'http://localhost:8080/assets';

  constructor(
    public http: HttpClient
  ) {
  }

  // get all assets
  getAll(): Observable<Asset> {
    return this.http.get<Asset>(this.API);
  }

  // get asset by id
  getByID(idAsset): Observable<Asset> {
    console.log(idAsset);
    return this.http.get<Asset>(this.API + '/detail/' + idAsset);
  }

  // create asset
  create(asset): Observable<any> {
    console.log('service' + asset);
    return this.http.post(this.API + '/create', asset);
  }

  // edit asset by idAsset
  edit(asset, assetId): Observable<Asset> {
    return this.http.patch<Asset>(this.API + '/edit/' + assetId, asset);
  }

  // delete asset by idAsset
  delete(assetId): Observable<Asset> {
    return this.http.delete<Asset>(this.API + '/delete/' + assetId);
  }

  // search assets by nameAsset containing
  searchByNameAsset(inputSearch: string): Observable<Asset> {
    let params = new HttpParams();
    params = params.append('valueSearch', inputSearch);
    return this.http.get<Asset>(this.API + '/inputSearch' , {params});
  }

}
