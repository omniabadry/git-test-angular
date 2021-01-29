import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product;
  relatedProducts: Product[]=[];
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id;
    // this.relatedProducts = this.productService.getAllProducts().slice(3, 7);
    this.activatedRoute.params.subscribe(
      (params) => {
        id = params.id;
        this.productService.getProductById(id).subscribe(
          (respond) => {
            console.log(respond);
            this.product = respond;
            this.productService.getAllProducts().subscribe(
              //hna bgeb ay 4 product
              (res) => { this.relatedProducts = res['product'].slice(4, 8) },
              () => { },
              () => { }

            )
          },
          (err) => { },
          () => { }
        )   
        
         },
      (error) => {
        console.log(error);
      },
      () => { }
    )
    // const id =this.activatedRoute.snapshot.params.id;
  }
     
}
