import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

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
  public id;
  public password;

  constructor(
    public dialogRef: MatDialogRef<UserChangePasswordComponent>,
    public formBuilder: FormBuilder,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.id = this.data.dataIdUser;
    this.password = this.data.dataPass;
    this.formChangePassword = this.formBuilder.group({
      getPassword: [this.password],
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.pattern('^[a-z0-9]{6,30}$')]],
      confirmPassword: ['', [Validators.required]],
    }, {validator: comparePassword});
  }

  // tslint:disable-next-line:typedef
  changePass() {
    if (this.formChangePassword.valid) {
      this.userService.changePassword(this.id, this.formChangePassword.value).subscribe(data => {
        this.dialogRef.close();
      });
    }
  }
}
