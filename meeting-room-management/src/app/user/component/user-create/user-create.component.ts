import {Component, Inject, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessageNotificationComponent} from '../message-notification/message-notification.component';

// tslint:disable-next-line:typedef
function comparePassword(c: AbstractControl) {
  const v = c.value;
  const isNotEmpty = v.confirmPassword !== '';
  if (isNotEmpty) {
    return (v.password === v.confirmPassword) ? null : {
      passwordNotMatch: true
    };
  }
}

// tslint:disable-next-line:typedef
export function checkUserName(userName = []) {
  return (c: AbstractControl) => {
    return (userName.includes(c.value) ? {inValidName: true} : null);
  };
}

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  formCreat: FormGroup;
  public roleList;
  public userList;
  public listUserName = [];
  public idMessage = 1;

  constructor(
    public dialogRef: MatDialogRef<UserCreateComponent>,
    public userService: UserService,
    public router: Router,
    public formBuilder: FormBuilder,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.formCreat = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.pattern('^[a-z0-9]{3,30}$'), checkUserName(this.listUserName)]],
      password: ['', [Validators.required, Validators.pattern('^[a-z0-9]{6,30}$')]],
      confirmPassword: ['', [Validators.required]],
      fullName: ['', [Validators.required, Validators.maxLength(30)]],
      department: ['', [Validators.required, Validators.maxLength(30)]],
      roleName: ['', Validators.required]
    }, {validator: comparePassword});
    this.userService.getAllRole().subscribe(data => {
      this.roleList = data;
    });
    this.userService.getAllUser().subscribe(data => {
      this.userList = data;
      this.getAllUserName();
    });
  }

  // tslint:disable-next-line:typedef
  getAllUserName() {
    if (!this.userList.isEmpty) {
      for (const element of this.userList) {
        this.listUserName.push(element.userName);
      }
    }
  }

  // tslint:disable-next-line:typedef
  addNewUser() {
    this.formCreat.markAllAsTouched();
    if (this.formCreat.valid) {
      this.userService.addNewUser(this.formCreat.value).subscribe(data => {
        console.log(data);
        if (data == null) {
          this.dialogRef.close();
          this.openDialogMessage();
        }
      }, error => console.log(error.message));
    }
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
