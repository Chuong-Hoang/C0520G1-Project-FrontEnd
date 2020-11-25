<<<<<<< HEAD
import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
=======
import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {MatDialogRef} from '@angular/material/dialog';
import {TokenStorageService} from '../../../office-common/service/token-storage/token-storage.service';
>>>>>>> fe797ed9eedc2383894b7ba4ac1118cdf32337fa

// tslint:disable-next-line:typedef
function comparePassword(c: AbstractControl) {
  const v = c.value;
  const isNotEmpty = v.confirmPassword !== '';
<<<<<<< HEAD
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

=======
  if (isNotEmpty) {
    return (v.newPassword === v.confirmPassword) ? null : {
      passwordNotMatch: true
    };
  }
}
>>>>>>> fe797ed9eedc2383894b7ba4ac1118cdf32337fa

@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.css']
})
export class UserChangePasswordComponent implements OnInit {
  formChangePassword: FormGroup;
<<<<<<< HEAD
  public id;
  public password;
=======
  public errorMessage: string;
>>>>>>> fe797ed9eedc2383894b7ba4ac1118cdf32337fa

  constructor(
    public dialogRef: MatDialogRef<UserChangePasswordComponent>,
    public formBuilder: FormBuilder,
    private userService: UserService,
<<<<<<< HEAD
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.id = this.data.dataIdUser;
    this.password = this.data.dataPass;
    this.formChangePassword = this.formBuilder.group({
      getPassword: [this.password],
=======
    private tokenStorageService: TokenStorageService
  ) {
  }

  public idUser: number;

  ngOnInit(): void {
    this.idUser = this.tokenStorageService.getUser().id;
    console.log(this.idUser);
    this.formChangePassword = this.formBuilder.group({
>>>>>>> fe797ed9eedc2383894b7ba4ac1118cdf32337fa
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.pattern('^[a-z0-9]{6,30}$')]],
      confirmPassword: ['', [Validators.required]],
    }, {validator: comparePassword});
  }

  // tslint:disable-next-line:typedef
  changePass() {
<<<<<<< HEAD
    if (this.formChangePassword.valid) {
      this.userService.changePassword(this.id, this.formChangePassword.value).subscribe(data => {
        this.dialogRef.close();
      });
    }
=======
    this.userService.changePassword(this.idUser, this.formChangePassword.value).subscribe(data => {
      console.log('data');
      console.log(data);
      this.errorMessage = data;
      if (this.errorMessage == null) {
        this.dialogRef.close();
      }
    }, error => {
      console.log(error);
    });
>>>>>>> fe797ed9eedc2383894b7ba4ac1118cdf32337fa
  }
}
