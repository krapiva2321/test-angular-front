import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})

export class ApiService {
    constructor() {}
    public createBook = '/api/book/create';
    public getBook = '/api/book';
    public getBookLabels = '/api/book/labels';
    public createAuthor = '/api/author/create';
    public getAuthors = '/api/author';
    public getAuthorLabels = '/api/author/labels';
    public dataPath = '/api/data';
    public getLangs = this.dataPath + '/langs';
}
