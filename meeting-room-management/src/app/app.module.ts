import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {MaterialModule} from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BookedRoomModule} from './booked-room/booked-room.module';
import {CommentModule} from './comment/comment.module';
import {MeetingRoomModule} from './meeting-room/meeting-room.module';
import {OfficeAssetModule} from './office-asset/office-asset.module';
import {OfficeCommonModule} from './office-common/office-common.module';
import {UserModule} from './user/user.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookedRoomModule,
    CommentModule,
    MeetingRoomModule,
    OfficeAssetModule,
    OfficeCommonModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
