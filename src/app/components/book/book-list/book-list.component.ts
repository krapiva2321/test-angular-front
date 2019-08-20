import { Component, OnInit} from '@angular/core';
import {Book, BookService} from 'src/app/services/book.service';
import {AuthorService} from '../../../services/author.service';
import {DataService} from '../../../services/data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})


export class BookListComponent implements OnInit {
    constructor(
      public bookListService: BookService,
      public authorService: AuthorService,
      public dataService: DataService
    ) { }
    ngOnInit() {
      this.bookListService.init();
    }
}
