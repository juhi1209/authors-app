import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {
  authors = ["author1","author2","author3"];  
  getAuthors() {
    return this.authors;
  }
  constructor() { }

}
