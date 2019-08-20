import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Author, AuthorService} from '../../../services/author.service';
import {BsModalRef} from 'ngx-bootstrap';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {
    createAuthorForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
    });
    submitBtnName: string;
    title: string;

    constructor(
        public bsModalRef: BsModalRef,
        public authorService: AuthorService,
        public dataService: DataService,
    ) {}
    ngOnInit() {
    }
    isControlInvalid(controlName: string): boolean {
        const control = this.createAuthorForm.controls[controlName];
        const result = control.invalid && control.touched;
        return result;
    }
    onSubmit() {
        const controls = this.createAuthorForm.controls;
        /** Проверяем форму на валидность */
        if (this.createAuthorForm.invalid) {
            Object.keys(controls)
                .forEach(controlName => controls[controlName].markAsTouched());
            return;
        }
        this.authorService.createAuthor(this.createAuthorForm.value);
        this.bsModalRef.hide();
    }
}
