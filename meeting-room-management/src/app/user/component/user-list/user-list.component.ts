import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UserDeleteComponent} from '../user-delete/user-delete.component';
import {UserCreateComponent} from '../user-create/user-create.component';
import {UserEditComponent} from '../user-edit/user-edit.component';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public userList;
  p: any;

  constructor(
    public dialog: MatDialog,
    public userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(data => {
      this.userList = data;
      console.log(data);
    });
  }

  // tslint:disable-next-line:typedef
  openDialogDelete(idUser) {
    this.userService.getUserById(idUser).subscribe(data => {
      const dialogRef = this.dialog.open(UserDeleteComponent, {
        width: '570px',
        height: '225px',
        data: {dataUser: data},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });
  }

  // tslint:disable-next-line:typedef
  openDialogAddNew() {
    const dialogRef = this.dialog.open(UserCreateComponent, {
      width: '740px',
      height: '580px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }

  // tslint:disable-next-line:typedef
  openDialogEdit(idUser) {
    this.userService.getUserById(idUser).subscribe(dataEdit => {
      const dialogRef = this.dialog.open(UserEditComponent, {
        width: '740px',
        height: '580px',
        data: {dataE: dataEdit.idUser},
        disableClose: true
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });

  }
}
