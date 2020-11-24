import {Injectable} from '@angular/core';
import {HttpClient , HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Asset} from '../model/model.asset';

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
    return this.http.get<Asset>(this.Api);
  }

  getByID(idAsset): Observable<Asset> {
    console.log(idAsset);
    return this.http.get<Asset>(this.Api + '/detail/' + idAsset);
  }

  create(asset): Observable<any> {
    console.log('service' + asset);
    return this.http.post(this.Api + '/create', asset);
  }

  edit(asset, assetId): Observable<Asset> {
    return this.http.patch<Asset>(this.Api + '/edit/' + assetId, asset);
  }

  delete(assetId): Observable<Asset> {
    return this.http.delete<Asset>(this.Api + '/delete/' + assetId);
  }


  searchByNameAsset(inputSearch: string): Observable<Asset> {

    let params = new HttpParams();
    params = params.append('valueSearch', inputSearch);

    return this.http.get<Asset>(this.Api + '/inputSearch' , {params});
  }

}
