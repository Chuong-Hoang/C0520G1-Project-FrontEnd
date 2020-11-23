import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CommentService} from '../../service/comment.service';

@Component({
  selector: 'app-delete-comment',
  templateUrl: './delete-comment.component.html',
  styleUrls: ['./delete-comment.component.css']
})
export class DeleteCommentComponent implements OnInit {
  public commentName;
  public idComment;
  constructor(
    public dialogRef: MatDialogRef<DeleteCommentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public commentService: CommentService,
  ) {}

  ngOnInit(): void {
    this.commentName = this.data.fullName.contentComment;
    this.idComment = this.data.fullName.idComment;
    console.log(this.commentName);
  }
  deleteComment(): void {
      this.commentService.deleteCommentByID(this.idComment).subscribe(data => {
      this.dialogRef.close();
    });
  }

}
