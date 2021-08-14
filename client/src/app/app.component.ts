import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPagination } from './models/pagination';
import { IProduct } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Book Shop';
  products: IProduct  [] = [];
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.http.get<IPagination>('https://localhost:44378/api/products').subscribe(
      (response: IPagination) => {
      this.products=response.data;
    }, error => {
      console.log(error);
    });
  }
}