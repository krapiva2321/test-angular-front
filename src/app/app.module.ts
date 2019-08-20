import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { BookItemComponent } from './components/book/book-item/book-item.component';
import { SearchComponent } from './components/book/search/search.component';
import { AccordionModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { CreateBookComponent } from './components/book/create-book/create-book.component';
import { BookFormComponent } from './components/book/book-form/book-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { MainComponent } from './components/main/main.component';
import { AuthorListComponent } from './components/author/author-list/author-list.component';
import { CreateAuthorComponent } from './components/author/create-author/create-author.component';
import { AuthorFormComponent } from './components/author/author-form/author-form.component';

@NgModule({
  declarations: [
      AppComponent,
      BookListComponent,
      BookItemComponent,
      SearchComponent,
      CreateBookComponent,
      BookFormComponent,
      MainComponent,
      AuthorListComponent,
      CreateAuthorComponent,
      AuthorFormComponent,
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      BrowserAnimationsModule,
      AccordionModule.forRoot(),
      ModalModule.forRoot(),
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

}
