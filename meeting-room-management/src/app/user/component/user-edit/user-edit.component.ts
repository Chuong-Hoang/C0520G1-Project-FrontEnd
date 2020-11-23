import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

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
      password: [''],
      fullName: [''],
      department: [''],
      roleName: ['']
    });
    this.userService.getAllRole().subscribe(data => {
      this.roleList = data;
    });
    this.dataIdUser = this.data.dataE;
    console.log(this.dataIdUser);
    this.userService.getUserById(this.dataIdUser).subscribe(getData => {
      this.formEdit.patchValue(getData);
      console.log(getData);
    });
  }

  // tslint:disable-next-line:typedef
  editUser() {
    console.log(this.formEdit.value);
    this.userService.editUser(this.dataIdUser, this.formEdit.value).subscribe(data => {
      this.dialogRef.close();
    });
  }

}
