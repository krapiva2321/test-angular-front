import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiService} from './api.service';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Author, AuthorLabels} from './author.service';


export interface Lang {
    'id': number;
    'name': string;
}
@Injectable({providedIn: 'root'})

export class DataService {
    langList: Lang[] = [];
    constructor(
        private http: HttpClient,
        private api: ApiService
    ) {}

    getLangs(): Observable<Lang[]> {
        return this.http.get <Lang[]> (this.api.getLangs)
            .pipe(tap(authors => this.langList = authors));
    }
    setLangs(): Observable<Lang[]> {
        return this.http.get <Lang[]> (this.api.getLangs)
            .pipe(tap(authors => this.langList = authors));
    }
    getLangName(langId: number) {
        let name: string = '';
        this.langList.forEach(function (row) {
            if (row.id == langId) {
                name = row.name;
            }
        });
        return name;
    }
}
