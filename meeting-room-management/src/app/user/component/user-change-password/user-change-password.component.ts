import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {MatDialogRef} from '@angular/material/dialog';
import {TokenStorageService} from '../../../office-common/service/token-storage/token-storage.service';
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
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.pattern('^[a-z0-9]{6,30}$')]],
      confirmPassword: ['', [Validators.required]],
    }, {validator: comparePassword});
  }
  // tslint:disable-next-line:typedef
  changePass() {
    this.userService.changePassword(this.idUser, this.formChangePassword.value).subscribe(data => {
      this.dialogRef.close();
    });
  }
}
