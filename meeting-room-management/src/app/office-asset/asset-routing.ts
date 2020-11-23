import {Routes} from '@angular/router';
import {AssetListComponent} from './component/asset-list/asset-list.component';
import {AssetCreateComponent} from './component/asset-create/asset-create.component';
import {AssetDetailComponent} from './component/asset-detail/asset-detail.component';


export const AssetRoutes: Routes = [
  {
    path: 'asset',
    component: AssetListComponent,
  },

  {
    path: 'asset-detail/:id',
    component: AssetDetailComponent,
  },

  {
    path: 'asset-create',
    component: AssetCreateComponent,
  },
];
