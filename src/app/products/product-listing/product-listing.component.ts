import { SlicePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss'],
})
export class ProductListingComponent implements OnInit {
products:Product[];
  // @Output() productAdded = new EventEmitter<Product>();
  pageNumbers: number[]=[];
  pageSize=9;
  currentPage=0;
  constructor(private productService: ProductService) { 

  }
  ngOnInit(): void {
    // this.products=this.productService.getAllProducts();
    // console.log(this.productService.getAllProducts().subscribe(
    this.productService.getAllProducts().subscribe(
      (response) => { 
        this.products=response['product']
        this.calculateNumberOfPages(response['numberOfProducts']);
},
      (err)=>{console.log(err)},
      ()=>{}
    );

    // this.products = this.products.sort((low, high) => low.price - high.price);
  }

  calculateNumberOfPages(length){
    this.pageNumbers=[]; 
    for (let index = 0; index <length / this.pageSize; index++) {
      this.pageNumbers.push(index + 1);
    }
  }

  getPageSlice():Product[]{
    const start = this.currentPage * this.pageSize;
    return this.products.slice(start, start + this.pageSize);
  }
  onSearchHandler(searchInput ){
    this.products= this.productService.searchByName(searchInput.value);
    this.calculateNumberOfPages(this.pageNumbers);
    console.log(searchInput.value)
    this.currentPage=0;
  }
  // sortedByName(){
  //   var sort_by_name = function (a, b) {
  //     return $(a).text().toLowerCase().localeCompare($(b).text().toLowerCase());
  //   }
  // }
  sort(event: any) {
    switch (event.target.value) {
      case "Low":
        {
          this.products = this.products.sort((low, high) => low.price - high.price);
          break;
        }

      case "High":
        {
          this.products = this.products.sort((low, high) => high.price - low.price);
          break;
        }

      case "Name":
        {
          this.products = this.products.sort(function (low, high) {
            if (low.data[0].name < high.data[0].name) {
              return -1;
            }
            else if (low.data[0].name > high.data[0].name) {
              return 1;
            }
            else {
              return 0;
            }
          })
          break;
        }

      default: {
        this.products = this.products.sort((low, high) => low.price - high.price);
        break;
      }

    }
    return this.products;

  }

}
