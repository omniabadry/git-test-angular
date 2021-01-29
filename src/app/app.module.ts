import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './_services/product.service';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { CustomAppRoutingModule } from './app-routing-module';
import { PaymentTypeService } from './_services/payment-type.service';
import { ProductCategoryService } from './_services/product-category';
import { StringPipePipe } from './pipes/string-pipe.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductModule } from './features/product/product.module';
import { SharedModule } from './shared/dropdown/shared.module';
import { HomeComponent } from './home/home.component';
import { MyInerceptorService } from './_services/myinterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FooterComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    CustomAppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [ProductService, PaymentTypeService, ProductCategoryService,
    { provide: HTTP_INTERCEPTORS, useClass: MyInerceptorService, multi: true }],

  bootstrap: [AppComponent]
})
export class AppModule { }
