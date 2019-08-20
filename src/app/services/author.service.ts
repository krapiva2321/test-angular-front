import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiService} from './api.service';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Book} from './book.service';

export interface Author {
    'id': number;
    'name': string;
}

export interface AuthorLabels {
    'id': string;
    'name': string;
}

@Injectable({providedIn: 'root'})


export class AuthorService {
    constructor(
        private http: HttpClient,
        private api: ApiService
    ) {
    }

    public authorList: Author[] = [];

    public authorLabels: AuthorLabels = {
        id: '',
        name: '',
    };
    init() {
        this.setLabels();
        this.getAuthors().subscribe((autors) => this.authorList = autors);
    }
    createAuthor(model: Author) {
        return this.http.post(this.api.createAuthor, model)
            .subscribe((data: Book) => this.authorList.push(data));
    }
    getAuthors(): Observable<Author[]> {
        return this.http.get<Author[]>(this.api.getAuthors)
            .pipe(tap(authors => this.authorList = authors));
    }
    setLabels() {
        return this.http.get(this.api.getAuthorLabels)
            .subscribe((data: AuthorLabels) => this.authorLabels = data);
    }
    getName(authorId: number) {
        let name: string = '';
        this.authorList.forEach(function (row) {
            if (row.id == authorId) {
                name = row.name;
            }
        });
        return name;
    }
}
