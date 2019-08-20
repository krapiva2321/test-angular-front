import { Component, OnInit, Input } from '@angular/core';
import {Book, BookService} from 'src/app/services/book.service';
import {AuthorService} from '../../../services/author.service';
import {log} from 'util';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})

export class BookItemComponent implements OnInit {
    @Input() book: Book;
    constructor(public bookListService: BookService,
                public authorService: AuthorService,
                public dataService: DataService
    ) { }

    ngOnInit() {
    }
}
