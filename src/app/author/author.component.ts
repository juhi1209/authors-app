import { AuthorService } from './../author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {

  title = 'Angular';
  authors;
  length;
  subTitle;

  constructor(service: AuthorService) {
    this.authors = service.getAuthors();
    this.length = this.authors.length;
    this.subTitle =  this.length + ' ' + (this.length === 1 ? 'author'  : 'authors');
   }
}

