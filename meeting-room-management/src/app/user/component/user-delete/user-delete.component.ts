import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {
  public idUser;
  public userName;

  constructor(
    public dialogRef: MatDialogRef<UserDeleteComponent>,
    public userService: UserService,
    public router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.idUser = this.data.dataUser.idUser;
    this.userName = this.data.dataUser.userName;
    console.log(this.userName);
  }

  // tslint:disable-next-line:typedef
  deleteUser() {
    this.userService.deleteUserById(this.idUser).subscribe(data => {
      this.router.navigateByUrl('user-list');
      this.dialogRef.close();
    });
  }
}
