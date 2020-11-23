import {Component, Inject, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

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

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  formCreat: FormGroup;
  public roleList;

  constructor(
    public dialogRef: MatDialogRef<UserCreateComponent>,
    public userService: UserService,
    public router: Router,
    public formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.formCreat = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.pattern('^[a-z0-9]{3,30}$')]],
      pwGroup: this.formBuilder.group({
        password: ['', [Validators.required, Validators.pattern('^[a-z0-9]{6,30}$')]],
        confirmPassword: ['', [Validators.required]]
      }, {validator: comparePassword}),
      fullName: ['', [Validators.required, Validators.maxLength(30)]],
      department: ['', [Validators.required, Validators.maxLength(30)]],
      roleName: ['', Validators.required]
    });
    this.userService.getAllRole().subscribe(data => {
      this.roleList = data;
    });
  }

  // tslint:disable-next-line:typedef
  addNewUser() {
    if (this.formCreat.valid) {
      console.log(this.formCreat.value);
      console.log(this.formCreat.value.message);
      this.userService.addNewUser(this.formCreat.value).subscribe(data => {
        this.dialogRef.close();
      }, error => console.log(error.message));
    }

  }
}
