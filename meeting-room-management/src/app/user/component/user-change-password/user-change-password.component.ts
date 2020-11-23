import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {MatDialogRef} from '@angular/material/dialog';

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
    private userService: UserService
  ) {
  }

  public idUser = 1;

  ngOnInit(): void {
    this.formChangePassword = this.formBuilder.group({
      oldPassword: [],
      newPassword: []
    });
    // this.userService.getUserById(this.idUser).subscribe(data => {
    //   this.formChangePassword.patchValue(data);
    //   console.log(data);
    // });
  }

  // tslint:disable-next-line:typedef
  changePass() {
    this.userService.changePassword(this.idUser, this.formChangePassword.value).subscribe(data => {
      this.dialogRef.close();
    });
  }

}