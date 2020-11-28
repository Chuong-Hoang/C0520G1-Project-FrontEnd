import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AssetServerService} from '../../service/asset-server.service';
import {Asset} from '../../model/model.asset';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.css']
})
export class AssetDetailComponent implements OnInit {
  public asset = new Asset();
  d: any;

  constructor(
    private assetService: AssetServerService,
    private activatedRouter: ActivatedRoute,
    private route: ActivatedRoute,
    private title: Title,
  ) {
  }

  ngOnInit(): void {
    this.title.setTitle('Asset');
    const id = +this.route.snapshot.paramMap.get('id');
    this.assetService.getByID(id).subscribe(data => {
      this.asset = data;
      data.image = data.image.substring(12);
      console.log(this.asset);
    } , error => console.log('error'));
  }
}
