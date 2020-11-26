import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CommentService} from '../../service/comment.service';
import {ErrorTypeService} from '../../service/error-type.service';
import {ErrorType} from '../../model/ErrorType.class';
import {MeetingRoom} from '../../model/MeetingRoom.class';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../../office-common/service/token-storage/token-storage.service';
import {MeetingRoomService} from '../../../meeting-room/service/meeting-room.service';
import {Title} from '@angular/platform-browser';


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
  isLoggedIn = false;
  public user;
  constructor(private formBuilder: FormBuilder,
              public errorTypeService: ErrorTypeService,
              public meetingRoomService: MeetingRoomService,
              public commentService: CommentService,
              public router: Router,
              private tokenStorageService: TokenStorageService,
              private title: Title,
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Feedback');
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      this.user = this.tokenStorageService.getUser().userName;
    }
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
      errorTypeName: ['', [Validators.required]],
      roomName: ['', [Validators.required]],
      replier: [''],
      senderName: [this.user]
    });

  }

  createComment(): void{
    console.log(this.createCommentForm.valid);
    if (this.createCommentForm.valid){
      console.log(this.createCommentForm.value);
      this.commentService.addNewComment(this.createCommentForm.value).subscribe(data => {
        this.router.navigate(['comment-list'], {queryParams: {create_msg: 'Create successfully!', si: true}});
      }, err => {this.errors = err.error.message;
      });
    }
  }
}
