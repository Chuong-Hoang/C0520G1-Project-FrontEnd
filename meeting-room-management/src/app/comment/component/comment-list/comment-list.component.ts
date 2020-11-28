import {Component, OnInit} from '@angular/core';
import {CommentService} from '../../service/comment.service';
import {Comment} from '../../model/Comment.class';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  public comments: Comment[];
  public status = true;
  formSearch: FormGroup;
  p: any;

  constructor(
    public commentService: CommentService,
    private formBuilder: FormBuilder,
    private title: Title
  ) {
  }

  ngOnInit(): void {
    this.title.setTitle('Feedback');
    // tslint:disable-next-line:no-unused-expression
    this.comments;
    this.p = 0;
    this.commentService.getAllComment().subscribe(data => {
      this.comments = data;
    }, error => console.log(error));
    this.formSearch = this.formBuilder.group({
      // userNameSearch: ['', Validators.pattern(/^[a-zA-Z\d]+(([\',. -][a-zA-Z\d ])?[a-zA-Z\d]*)*$/)],
      userNameSearch: [''],
      roomNameSearch: [''],
      statusSearch: ['']
    });
  }

  onSearch(): void {
    this.p = 0;
    // tslint:disable-next-line:max-line-length
    this.commentService.search(this.formSearch.value.userNameSearch, this.formSearch.value.roomNameSearch, this.formSearch.value.statusSearch).subscribe(data => {
      this.comments = data;
    }, error =>  console.log(error));
  }
}
