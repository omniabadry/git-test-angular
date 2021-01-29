import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { paymentType } from 'src/app/_model/paymentType';
import { Product } from 'src/app/_model/product';
import { productCategory } from 'src/app/_model/product-category';
import { PaymentTypeService } from 'src/app/_services/payment-type.service';
import { ProductCategoryService } from 'src/app/_services/product-category';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  product: Product = { data: [{}], paymentTypes: [], tags: [], category: {} };
  paymentTypes: paymentType[] = [];
  productCategory: productCategory[] = [];
  editMode: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private paymentTypeService: PaymentTypeService,
    private productCategoryService: ProductCategoryService,
    private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    // const id =parseInt(this.activatedRoute.snapshot.params.id);

    //&& btmthl if condition
    this.editMode = this.activatedRoute.snapshot.url[1]
      && this.activatedRoute.snapshot.url[1].path === 'edit' && true;
    console.log(this.editMode)
    if (this.editMode) {
      const id = this.activatedRoute.snapshot.params.id;
      //b3ml parsing l id mn string l integer (+id)
      this.product = this.productService.getProductById(+id);
    }

    this.paymentTypes = this.paymentTypeService.getAllPayments();
    this.productCategory = this.productCategoryService.getAllCategory();
  }

  onSubmit(form) {
    // console.log(form.value);
    // for (let index = 0; index < this.paymentTypes.length; index++) {
    //   if (form.value['checkBox' + index]) {
    //     this.product.paymentTypes.push(this.paymentTypes[index]);
    //   }
    // }
    // console.log(form.value);
    // console.log(this.product);
    this.productService.addProduct(this.product).subscribe(
      (response) => {
        this.router.navigate(['/product','listing'])
        console.log(response)},
      (err) => { console.log(err) },
      () => { },

    );
  }

  onTagAdded(tagInput) {
    this.product.tags.push({ name: tagInput.value, id: tagInput.value });
    tagInput.value = "";
  }

  deleteTag(id: number) {
    console.log(this.product.tags);
    this.product.tags = this.product.tags.filter(p => p.id !== id);
    console.log(this.product.tags);
  }

  deleteAllTag(id: number) {
    console.log(this.product.tags);
    this.product.tags = this.product.tags.filter(p => p.id === id);
    console.log(this.product.tags);
  }

  onCheckBoxPressed(index) {
    this.product.paymentTypes.push(this.paymentTypes[index]);
    // alert(index);
  }

}
