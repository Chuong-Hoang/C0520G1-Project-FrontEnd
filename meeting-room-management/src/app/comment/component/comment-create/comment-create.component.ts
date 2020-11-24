import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CommentService} from '../../service/comment.service';
import {ErrorTypeService} from '../../service/error-type.service';
import {ErrorType} from '../../model/errorType.class';
import {MeetingRoom} from '../../model/meetingRoom.class';
import {User} from '../../model/user.class';
import {Router} from '@angular/router';
import {MeetingRoomService} from '../../service/meeting-room.service';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {
  createCommentForm: FormGroup;
  public errorTypes: ErrorType[] = [];
  public meetingRoomServices: MeetingRoom[] = [];
  public errors = [];


  constructor(private formBuilder: FormBuilder,
              public commentService: CommentService,
              public errorTypeService: ErrorTypeService,
              public meetingRoomService: MeetingRoomService,
              public router: Router
  ) {
  }

  ngOnInit(): void {
    this.errorTypeService.getAllErrorType().subscribe(data => {
      this.errorTypes = data;
    });
    this.meetingRoomService.getAllMeetingRoom().subscribe(data => {
      this.meetingRoomServices = data;
    });
    this.createCommentForm = this.formBuilder.group({
      // idComment: [''],
      commentTime: [''],
      contentComment: ['', [Validators.required ]],
      contentReply: [''],
      status: [''],
      errorTypeName: [''],
      roomName: [''],
      replier: [''],
      idSender: [''],
    })
    ;
  }

  createComment(): void{
    console.log(this.createCommentForm.valid);
    if (this.createCommentForm.valid){
      this.commentService.addNewComment(this.createCommentForm.value).subscribe(data => {
        this.router.navigate(['comment-list'], {queryParams: {create_msg: 'Create successfully!', si: true}});
      }, err => {this.errors = err.error.message;
      });
    }
  }
}
