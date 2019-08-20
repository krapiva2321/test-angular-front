import { Component, OnInit } from '@angular/core';
import {Author, AuthorService} from '../../services/author.service';
import {BookService} from '../../services/book.service';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    public bookPageTitle = 'Раздел Книги';
    public bookTitle = 'Список Книг';
    public authorPageTitle = 'Раздел Авторы';
    public authorTitle = 'Список Авторов';
    public page = true;

  constructor() {}

  ngOnInit() {
  }
  openAuthorPage() {
    this.page = false;
  }
  openBookPage() {
    this.page = true;
  }
}
