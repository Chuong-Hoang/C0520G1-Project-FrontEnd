import {Component, Inject, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

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
      userName: [''],
      password: [''],
      fullName: [''],
      department: [''],
      roleName: ['']
    });
    this.userService.getAllRole().subscribe(data => {
      this.roleList = data;
    });
  }

  // tslint:disable-next-line:typedef
  addNewUser() {
    console.log(this.formCreat.value);
    this.userService.addNewUser(this.formCreat.value).subscribe(data => {
      this.dialogRef.close();
    }, error => console.log(error.message));
  }

}
