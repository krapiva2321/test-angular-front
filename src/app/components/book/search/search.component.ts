import { Component, OnInit } from '@angular/core';
import {BookService} from '../../../services/book.service';
import {Author, AuthorService} from '../../../services/author.service';
import {DataService, Lang} from '../../../services/data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    langList: Observable<Lang[]>;
    selectedLang = [];
    authorList: Observable<Author[]>;
    selectedAuthor = [];
    countFrom: number;
    countTo: number;
    searchName = '';
    constructor(
        public bookService: BookService,
        public authorService: AuthorService,
        public dataService: DataService
    ) {
    }
    ngOnInit() {
        this.authorList = this.authorService.getAuthors();
        this.langList = this.dataService.getLangs();
    }
    onSendParam() {
        let paramSearch = '?' + this.searchNameStr() + this.selectedAuthorString()
            + this.selectedLangString() + this.countFromStr() + this.countToStr();
        this.bookService.getBooks(paramSearch).subscribe();
    }
    selectedAuthorString() {
        let str = '';
        this.selectedAuthor.forEach(function(author, index) {
            str += '&author_id[' + index + ']=' + author.id ;
        });
        return str;
    }
    selectedLangString() {
        let str = '';
        this.selectedLang.forEach(function(lang, index) {
            str += '&lang[' + index + ']=' + lang.id ;
        });
        return str;
    }
    searchNameStr() {
        return this.searchName !== '' ? '&name=' + this.searchName : '';
    }
    countFromStr() {
        return this.countFrom !== undefined  ? '&count_from=' + this.countFrom : '';
    }
    countToStr() {
        return this.countTo !== undefined  ? '&count_to=' + this.countTo : '';
    }
}
