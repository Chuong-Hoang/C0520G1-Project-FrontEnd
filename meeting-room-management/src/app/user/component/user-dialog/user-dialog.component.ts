import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../../office-common/service/token-storage/token-storage.service';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    private tokenStorageService: TokenStorageService,
    private route: Router,
  ) {
  }

  ngOnInit(): void {
    this.tokenStorageService.signOut();
    this.route.navigateByUrl('/login');
  }

  // tslint:disable-next-line:typedef
}
