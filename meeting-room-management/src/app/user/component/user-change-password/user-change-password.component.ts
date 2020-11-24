import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {MatDialogRef} from '@angular/material/dialog';
import {TokenStorageService} from '../../../office-common/service/token-storage/token-storage.service';

// tslint:disable-next-line:typedef
function comparePassword(c: AbstractControl) {
  const v = c.value;
  const isNotEmpty = v.confirmPassword !== '';
  const isNotEmptyPassOld = v.oldPassword !== '';
  if (isNotEmptyPassOld) {
    if (v.getPassword === v.oldPassword) {
      if (isNotEmpty) {
        return (v.newPassword === v.confirmPassword) ? null : {
          passwordNotMatch: true
        };
      }
    } else {
      return {passwordNotDuplicate: true};
    }
  }
}

@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.css']
})
export class UserChangePasswordComponent implements OnInit {
  formChangePassword: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UserChangePasswordComponent>,
    public formBuilder: FormBuilder,
    private userService: UserService,
    private tokenStorageService: TokenStorageService
  ) {
  }

  public idUser: number;

  ngOnInit(): void {
    this.idUser = this.tokenStorageService.getUser().id;
    console.log(this.idUser);
    this.formChangePassword = this.formBuilder.group({
      oldPassword: [],
      newPassword: []
    });
  }

  // tslint:disable-next-line:typedef
  changePass() {
    this.userService.changePassword(this.idUser, this.formChangePassword.value).subscribe(data => {
      this.dialogRef.close();
    });
  }
}
