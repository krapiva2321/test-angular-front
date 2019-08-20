import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiService} from './api.service';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

export interface Book {
    'id': number;
    'name': string;
    'author_id': number;
    'count_page': number;
    'lang': number;
    'genre': string;
    'description': string;
}

export interface BookLabels {
    'id': string;
    'name': string;
    'author_id': string;
    'count_page': string;
    'lang': string;
    'genre': string;
    'description': string;
}
export interface BookErrorField {
    'field': string;
    'message': string;
}


@Injectable({providedIn: 'root'})


export class BookService {
    constructor(
        private http: HttpClient,
        private api: ApiService
        ) {}

    public bookList: Book[] = [];

    public error: BookErrorField[] = [];

    public bookLabels: BookLabels = {
        id: '',
        name: '',
        author_id: '',
        count_page: '',
        lang: '',
        genre: '',
        description: ''
    };
    init() {
        this.setLabels();
        this.getBooks().subscribe((data) => this.bookList = data);
    }
    createBook(newBook: Book) {
        return this.http.post(this.api.createBook, newBook)
            .subscribe((data: Book) => this.bookList.push(data),
                error => this.error = error);
    }
    getBooks(paramSearch = '') {
        return this.http.get <Book[]>(this.api.getBook + paramSearch).pipe(tap(books => this.bookList = books));
    }
    setLabels() {
        return this.http.get(this.api.getBookLabels)
            .subscribe((data: BookLabels) => this.bookLabels = data);
    }
}
