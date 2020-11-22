import {Routes} from '@angular/router';
import {AssetListComponent} from './asset-list/asset-list.component';
import {AssetDetailComponent} from './asset-detail/asset-detail.component';
import {AssetCreateComponent} from './asset-create/asset-create.component';
import {AuthGuard} from '../office-common/helper/auth.guard';

export const AssetRoutes: Routes = [
  {
    path: 'asset',
    component: AssetListComponent,
    canActivate: [AuthGuard],
    data: {roles: 'ROLE_ADMIN'}
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
