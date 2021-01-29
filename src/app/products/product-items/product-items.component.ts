import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.scss']
})
export class ProductItemsComponent implements OnInit,OnChanges {

 @Input() product:Product;
  // @Output() itemAdded = new EventEmitter <Product>();
  constructor(private productService: ProductService) {
    
   }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    // if(this.product.price<500){
    // this.product = { 
    //   data: [{ name: "waaaaaw", description: "it is amazing" }],
    // price: 2200,
    // // discount: 300,
    //   imagesURl: ['../../../../assets/img/custom-header.png'],
    //   };
    // }
  }

  getPrice():number{
    return this.product.discount? this.product.price-this.product.discount:this.product.price
  }

  addedToCard():void{
    
    // this.itemAdded.emit(this.product);
    
    this.productService.productAdded.emit(this.product);
  }
}
