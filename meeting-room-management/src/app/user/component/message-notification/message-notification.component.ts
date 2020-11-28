import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-message-notification',
  templateUrl: './message-notification.component.html',
  styleUrls: ['./message-notification.component.css']
})
export class MessageNotificationComponent implements OnInit {
  public messageNotification;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<MessageNotificationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.messageNotification = this.data.dataMessage;
    const matDialogConfig: MatDialogConfig = new MatDialogConfig();
    matDialogConfig.position = {left: `40%`, top: `60px`};
    this.dialogRef.updatePosition(matDialogConfig.position);
  }
}
