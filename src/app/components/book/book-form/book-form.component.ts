import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../../services/book.service';
import {BsModalRef} from 'ngx-bootstrap';
import {Author, AuthorService} from '../../../services/author.service';
import {DataService, Lang} from '../../../services/data.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-book-form',
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent implements OnInit {
    createBookForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        author_id: new FormControl('', [Validators.required]),
        count_page: new FormControl('', [Validators.required]),
        lang: new FormControl('', [Validators.required]),
        genre: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required])
    });
    submitBtnName: string;
    title: string;
    authorList: Observable<Author[]>;
    langList: Observable<Lang[]>;

    constructor(
        public bookListService: BookService,
        public bsModalRef: BsModalRef,
        public authorService: AuthorService,
        public dataService: DataService,
    ) {}
    ngOnInit() {
        this.authorList = this.authorService.getAuthors();
        this.langList = this.dataService.getLangs();
    }
    isControlInvalid(controlName: string): boolean {
        const control = this.createBookForm.controls[controlName];

        const result = control.invalid && control.touched;

        return result;
    }
    onSubmit() {
        const controls = this.createBookForm.controls;
        /** Проверяем форму на валидность */
        if (this.createBookForm.invalid) {
            Object.keys(controls)
                .forEach(controlName => controls[controlName].markAsTouched());
            return;
        }
        this.bookListService.createBook(this.createBookForm.value);
        this.bsModalRef.hide();
   }
}
