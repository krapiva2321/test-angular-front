import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {BookFormComponent} from '../book-form/book-form.component';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
    bsModalRef: BsModalRef;
    constructor(private modalService: BsModalService) {}

   openCreateBookModal() {
      this.bsModalRef = this.modalService.show(BookFormComponent);
      this.bsModalRef.content.submitBtnName = 'Сохранить';
      this.bsModalRef.content.title = 'Добавить новую книгу';
  }

  ngOnInit() {
  }
}
