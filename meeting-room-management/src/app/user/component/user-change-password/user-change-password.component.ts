import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {TokenStorageService} from '../../../office-common/service/token-storage/token-storage.service';
import {Router} from '@angular/router';
import {UserDialogComponent} from '../user-dialog/user-dialog.component';

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
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.css']
})
export class UserChangePasswordComponent implements OnInit {
  formChangePassword: FormGroup;
  public errorMessage: string;

  constructor(
    public dialogRef: MatDialogRef<UserChangePasswordComponent>,
    public formBuilder: FormBuilder,
    private userService: UserService,
    private tokenStorageService: TokenStorageService,
    private route: Router,
    public dialog: MatDialog
  ) {
  }

  public idUser: number;

  ngOnInit(): void {
    this.idUser = this.tokenStorageService.getUser().id;
    console.log(this.idUser);
    this.formChangePassword = this.formBuilder.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.pattern('^[a-z0-9]{6,30}$')]],
      confirmPassword: ['', [Validators.required]],
    }, {validator: comparePassword});
  }

  // tslint:disable-next-line:typedef
  changePass() {
    this.formChangePassword.markAllAsTouched();
    if (this.formChangePassword.valid) {
      this.userService.changePassword(this.idUser, this.formChangePassword.value).subscribe(data => {
        this.errorMessage = data;
        console.log(data);
        if (this.errorMessage == null) {
          this.dialogRef.close();
          this.openDialogConfirm(this.idUser);
        }
      }, error => {
        console.log(error);
      });
    }
  }

  // tslint:disable-next-line:typedef
  openDialogConfirm(id) {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '500px',
      height: '200x',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
