import {Routes} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {LoginComponent} from './component/login/login.component';

export const OfficeCommonRoute: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent}
];
