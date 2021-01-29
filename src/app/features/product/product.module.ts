import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StringPipePipe } from "src/app/pipes/string-pipe.pipe";
import { ProductItemsComponent } from "src/app/products/product-items/product-items.component";
import { ProductListingComponent } from "src/app/products/product-listing/product-listing.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { AuthGuardService } from 'src/app/_services/auth-guard.service';
// import { AuthGuardService } from 'src/app/_services/auth-guard.service';

@NgModule({


    declarations: [
        ProductItemsComponent,
        ProductListingComponent,
        AddProductComponent,
        ProductDetailsComponent,
        StringPipePipe,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: '', children: [
                    // { path: 'add', component: AddProductComponent, canActivate: [AuthGuardService] },
                    { path: '', component: ProductListingComponent },
                    { path: 'add', component: AddProductComponent, canActivate: [AuthGuardService]  },
                    { path: 'details/:id', component: ProductDetailsComponent },
                    { path: 'edit/:id', component: AddProductComponent },
                ]
            },
        ])
    ],
    exports: [],
    providers: [],
})
export class ProductModule { }
