import {Routes} from '@angular/router';
import {AssetListComponent} from './component/asset-list/asset-list.component';
import {AssetCreateComponent} from './component/asset-create/asset-create.component';
import {AssetDetailComponent} from './component/asset-detail/asset-detail.component';
import {AuthGuard} from '../office-common/helper/auth.guard';


export const AssetRoutes: Routes = [
  {
    path: 'asset',
    component: AssetListComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_ADMIN']}
  },

  {
    path: 'asset-detail/:id',
    component: AssetDetailComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_ADMIN']}
  },

  {
    path: 'asset-create',
    component: AssetCreateComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_ADMIN']}
  },
];
