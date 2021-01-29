import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  cartArray: Product[] = [];
  isOpened = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.productAdded.subscribe(
      (res) => {
        this.cartArray.push(res);
      },
      (err) => { console.error(err) },
      (completed) => { alert("completed") }
    );
  }
  ngOnChanges(changes): void {
    console.log(this.cartArray)
  }
  getTotal(): number {
    let element = 0;
    for (let index = 0; index < this.cartArray.length; index++) {
      element += this.cartArray[index].discount ? this.cartArray[index].price -
        this.cartArray[index].discount : this.cartArray[index].price;
    }
    return element;
  }

  countItem(): number {
    let counter = 0;
    for (let index = 0; index < this.cartArray.length; index++) {
      if (this.cartArray[index]) {
        counter++;
      }
    }
    return counter;
  }

  changeCurrentPage(dest) {
    this.productService.currentPage = dest;
  }

}
