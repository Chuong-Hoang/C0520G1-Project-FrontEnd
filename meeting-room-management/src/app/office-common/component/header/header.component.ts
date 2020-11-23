import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../service/token-storage/token-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {UserChangePasswordComponent} from '../../../user/component/user-change-password/user-change-password.component';

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

  constructor(private tokenStorageService: TokenStorageService, private router: Router,
              public dialog: MatDialog) {
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
  openDialogChangePassword() {
    const dialogRef = this.dialog.open(UserChangePasswordComponent, {
      width: '740px',
      height: '380px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }
}
