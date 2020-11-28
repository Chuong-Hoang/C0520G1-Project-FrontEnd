import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {MessageNotificationComponent} from '../message-notification/message-notification.component';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {
  public idUser;
  public userName;
  public idMessage = 3;

  constructor(
    public dialogRef: MatDialogRef<UserDeleteComponent>,
    public userService: UserService,
    public router: Router,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.idUser = this.data.dataUser.idUser;
    this.userName = this.data.dataUser.userName;
    console.log(this.userName);
  }

  // tslint:disable-next-line:typedef
  deleteUser() {
    this.userService.deleteUserById(this.idUser).subscribe(data => {
      if (data == null) {
        this.dialogRef.close();
        this.openDialogMessage();
      }
    });
  }

  // tslint:disable-next-line:typedef
  openDialogMessage() {
    const timeout = 1800;
    const dialogRef = this.dialog.open(MessageNotificationComponent, {
      width: '300px',
      height: '160px',
      data: {dataMessage: this.idMessage},
      disableClose: true
    });
    dialogRef.afterOpened().subscribe(_ => {
      setTimeout(() => {
        dialogRef.close();
      }, timeout);
    });
  }
}
