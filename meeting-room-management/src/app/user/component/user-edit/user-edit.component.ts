import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessageNotificationComponent} from '../message-notification/message-notification.component';

// tslint:disable-next-line:typedef
function comparePassword(c: AbstractControl) {
  const v = c.value;
  const isNotEmpty = v.confirmPassword !== '';
  if (isNotEmpty) {
    return (v.newPassword === v.confirmPassword) ? null : {
      passwordNotMatch: true
    };
  }
}

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  formEdit: FormGroup;
  public roleList;
  public dataIdUser;
  public idMessage = 2;

  constructor(
    public dialogRef: MatDialogRef<UserEditComponent>,
    public userService: UserService,
    public router: Router,
    public formBuilder: FormBuilder,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.formEdit = this.formBuilder.group({
      userName: [''],
      newPassword: ['', [Validators.required, Validators.pattern('^[a-z0-9]{6,30}$')]],
      confirmPassword: ['', [Validators.required]],
      fullName: ['', [Validators.required, Validators.maxLength(30)]],
      department: ['', [Validators.required, Validators.maxLength(30)]],
      roleName: ['', Validators.required]
    }, {validator: comparePassword});
    this.userService.getAllRole().subscribe(data => {
      this.roleList = data;
    });
    this.dataIdUser = this.data.dataE;
    console.log(this.dataIdUser);
    this.userService.getUserById(this.dataIdUser).subscribe(getData => {
      this.formEdit.patchValue(getData);
      console.log(getData.idUser);
    });
  }

  // tslint:disable-next-line:typedef
  editUser() {
    this.formEdit.markAllAsTouched();
    if (this.formEdit.valid) {
      console.log(this.formEdit.value);
      this.userService.editUser(this.dataIdUser, this.formEdit.value).subscribe(data => {
        if (data == null) {
          this.dialogRef.close();
          this.openDialogMessage();
        }
      });
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
