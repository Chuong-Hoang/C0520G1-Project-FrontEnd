import {Component, OnInit} from '@angular/core';
import {CommentService} from '../../service/comment.service';
import {Comment} from '../../model/comment.class';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  public comments: Comment[];
  public status = true;
  formSearch: FormGroup;
  // public total: number;
  p: any;

  constructor(
    public commentService: CommentService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.p = 0;
    this.commentService.getAllComment().subscribe(data => {
      this.comments = data;
      console.log(this.comments);
    }, error => console.log(error));
    this.formSearch = this.formBuilder.group({
      userNameSearch: [''],
      roomNameSearch: [''],
      statusSearch: ['']
    });
  }

  onSearch(): void {
    this.p = 0;
<<<<<<< HEAD
    this.commentService.search(this.formSearch.value.a, this.formSearch.value.b, this.formSearch.value.c).subscribe(data => {
=======
    // tslint:disable-next-line:max-line-length
    this.commentService.search(this.formSearch.value.userNameSearch, this.formSearch.value.roomNameSearch, this.formSearch.value.statusSearch).subscribe(data => {
>>>>>>> fe797ed9eedc2383894b7ba4ac1118cdf32337fa
      console.log(data);
      this.comments = data;
    }, error =>  console.log(error));
  }
}
