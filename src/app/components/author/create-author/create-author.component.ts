import { Component, OnInit } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {AuthorFormComponent} from '../author-form/author-form.component';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent implements OnInit {
    bsModalRef: BsModalRef;
    buttonName = 'Добавить автора';
    constructor(private modalService: BsModalService) {}

    openCreateAuthorModal() {
        this.bsModalRef = this.modalService.show(AuthorFormComponent);
        this.bsModalRef.content.submitBtnName = 'Сохранить';
        this.bsModalRef.content.title = 'Добавить автора';
    }
    ngOnInit() {
    }
}
