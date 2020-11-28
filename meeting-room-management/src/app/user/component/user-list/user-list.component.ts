import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UserDeleteComponent} from '../user-delete/user-delete.component';
import {UserCreateComponent} from '../user-create/user-create.component';
import {UserEditComponent} from '../user-edit/user-edit.component';
import {UserService} from '../../service/user.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TokenStorageService} from '../../../office-common/service/token-storage/token-storage.service';
import {Title} from '@angular/platform-browser';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public userList = [];
  public result = '';
  public p = 1;
  public formSearch: FormGroup;
  public idUser;

  constructor(
    public dialog: MatDialog,
    public userService: UserService,
    public formBuilder: FormBuilder,
    private tokenStorageService: TokenStorageService,
    private title: Title
  ) {
  }

  ngOnInit(): void {
    this.title.setTitle('User');
    this.p = 0;
    this.idUser = this.tokenStorageService.getUser().id;
    this.userService.getAllUser().subscribe(data => {
      this.userList = data;
      if (this.userList == null) {
        this.result = 'Không có kết quả ';
      } else {
        this.result = this.userList.length + '';
      }
      console.log(data);
    }, error => {
      console.log(error);
    });
    this.formSearch = this.formBuilder.group({
      input1: [''],
      input2: [''],
    });
  }

  onSearch(): void {
    this.p = 0;
    this.userList = [];
    this.result = '';
    this.userService.searchUserByUserNameOrDepartment(this.formSearch.value.input1,
      this.formSearch.value.input2).subscribe(data => {
      this.userList = data;
      if (this.userList.length === 0) {
        this.result = 'Rất tiết! không tìm thấy dữ liệu.';
      } else {
        this.result = this.userList.length + '';
      }
    }, error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line:typedef
  openDialogDelete(idUser) {
    this.userService.getUserById(idUser).subscribe(data => {
      const dialogRef = this.dialog.open(UserDeleteComponent, {
        width: '570px',
        height: '200x',
        data: {dataUser: data},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.onSearch();
      });
    });
  }

  // tslint:disable-next-line:typedef
  openDialogAddNew() {
    const dialogRef = this.dialog.open(UserCreateComponent, {
      width: '740px',
      height: '500px',
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
        height: '450px',
        data: {dataE: dataEdit.idUser},
        disableClose: true
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.onSearch();
      });
    });
  }

  // tslint:disable-next-line:typedef
  resetValueForm() {
    this.formSearch.reset();
    this.ngOnInit();
  }
}
