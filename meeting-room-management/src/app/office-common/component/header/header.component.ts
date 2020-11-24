import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../service/token-storage/token-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {UserChangePasswordComponent} from '../../../user/component/user-change-password/user-change-password.component';
import {UserService} from '../../../user/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private role: string;
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = true;
  username: string;
  public id = 1;

  constructor(private tokenStorageService: TokenStorageService, private router: Router,
              public dialog: MatDialog, public userService: UserService) {
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.role = user.role;

      this.showAdminBoard = this.role.includes('ROLE_ADMIN');
      this.showUserBoard = this.role.includes('ROLE_USER');
      this.username = user.userName;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/']).then(() => window.location.reload());
  }

  // tslint:disable-next-line:typedef
  openDialogChangePassword(id) {
    this.userService.getUserById(id).subscribe(data => {
      const dialogRef = this.dialog.open(UserChangePasswordComponent, {
        width: '740px',
        height: '330px',
        data: {dataIdUser: data.idUser, dataPass: data.password},
        disableClose: true
      });
      console.log(data.password);
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });

  }
}
