import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

// tslint:disable-next-line:typedef
function comparePassword(c: AbstractControl) {
  const v = c.value;
  const isNotEmpty = v.confirmPassword !== '';
  if (isNotEmpty) {
<<<<<<< HEAD
    return (v.password === v.confirmPassword) ? null : {
=======
    return (v.newPassword === v.confirmPassword) ? null : {
>>>>>>> fe797ed9eedc2383894b7ba4ac1118cdf32337fa
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

  constructor(
    public dialogRef: MatDialogRef<UserEditComponent>,
    public userService: UserService,
    public router: Router,
    public formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.formEdit = this.formBuilder.group({
      userName: [''],
<<<<<<< HEAD
      password: ['', [Validators.required, Validators.pattern('^[a-z0-9]{6,30}$')]],
=======
      newPassword: ['', [Validators.required, Validators.pattern('^[a-z0-9]{6,30}$')]],
>>>>>>> fe797ed9eedc2383894b7ba4ac1118cdf32337fa
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
    if (this.formEdit.valid) {
      console.log(this.formEdit.value);
      this.userService.editUser(this.dataIdUser, this.formEdit.value).subscribe(data => {
        this.dialogRef.close();
      });
    }
  }
}
