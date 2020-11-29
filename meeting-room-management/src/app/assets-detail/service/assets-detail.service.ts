import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AssetsDetailService {
  public API_ASSETS_DETAIL = 'http://localhost:8080/assets';
  public ASSETS_DETAIL = 'http://localhost:8080/assetDetail';

  constructor(
  public http: HttpClient
  ) { }

  getAssetsDetailById(idAssetsDetail): Observable<any> {
    return this.http.get(this.API_ASSETS_DETAIL + '/' + idAssetsDetail);
  }
  getAllAssetsDetail(): Observable<any> {
    return this.http.get(this.API_ASSETS_DETAIL);
  }

  createAssetDetail(assetDetail): Observable<any> {
    return this.http.post(this.ASSETS_DETAIL + '/create',
      {
        nameAssetDetail: assetDetail.assetName,
        quantity: assetDetail.quantity,
        nameMeetingRoom: assetDetail.meetingRoomName
      });
  }
}
