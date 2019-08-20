import {Component, Input, OnInit} from '@angular/core';
import {Author, AuthorService} from '../../../services/author.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})

export class AuthorListComponent implements OnInit {
  constructor(public authorService: AuthorService) { }

  ngOnInit() {
    this.authorService.init();
  }
}
