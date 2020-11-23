import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AssetServerService} from '../../service/asset-server.service';
import {Asset} from '../../model/model.asset';

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.css']
})
export class AssetDetailComponent implements OnInit {
  public asset = new Asset();

  constructor(
    private assetService: AssetServerService,
    private activatedRouter: ActivatedRoute,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.assetService.getByID(id).subscribe(data => {
      this.asset = data;
      console.log(this.asset);
    } , error => console.log('error'));
  }
}
