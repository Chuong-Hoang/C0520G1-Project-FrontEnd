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
    this.commentService.getAllComment().subscribe(data => {
      this.comments = data;
      console.log(this.comments);
    });
    this.formSearch = this.formBuilder.group({
      a: [''],
      b: [''],
      c: ['']
    });
  }

  onSearch(): void {
    this.commentService.search(this.formSearch.value.a, this.formSearch.value.b, this.formSearch.value.c).subscribe(data => {
      console.log(data);
      this.comments = data;
    });
  }
}
