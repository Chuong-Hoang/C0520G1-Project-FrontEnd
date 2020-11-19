import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {OfficeCommonRoute} from './office-common.route';
import {authInterceptorProviders} from './helper/auth.interceptor';



@NgModule({
  declarations: [HeaderComponent, HomeComponent, LoginComponent],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(OfficeCommonRoute),
    FormsModule
  ],
  providers: [authInterceptorProviders]
})
export class OfficeCommonModule { }
