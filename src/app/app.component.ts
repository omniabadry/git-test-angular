import { Component, DoCheck, OnInit } from '@angular/core';
import { Product } from './_model/product';
import { ProductService } from './_services/product.service';

@Component({
  selector: 'app-root',
  //  selector: '.app-root',
  //  selector: '{[app-root]}',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  productArray: Product[] = [];
  title = 'first-app';
  currentPage: string;
  constructor(private productService: ProductService) { }
  ngDoCheck(): void {
    this.currentPage = this.productService.currentPage;
  }

  addToCardAtHeader(product: Product) {
    console.log(product)
    this.productArray.push(product);
  }
}
