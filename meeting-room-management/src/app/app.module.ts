import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BookedRoomModule} from './booked-room/booked-room.module';
import {CommentModule} from './comment/comment.module';
import {MeetingRoomModule} from './meeting-room/meeting-room.module';
import {OfficeAssetModule} from './office-asset/office-asset.module';
import {OfficeCommonModule} from './office-common/office-common.module';
import {UserModule} from './user/user.module';
import {StatisticRoomModule} from './statistic-room/statistic-room.module';
import {HttpClientModule} from '@angular/common/http';
import {authInterceptorProviders} from './office-common/helper/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    BookedRoomModule,
    CommentModule,
    MeetingRoomModule,
    OfficeAssetModule,
    OfficeCommonModule,
    UserModule,
    StatisticRoomModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {
}
