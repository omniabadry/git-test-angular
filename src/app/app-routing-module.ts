import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { TestComponent } from "./test/test.component";
import { HomeComponent } from './home/home.component';

const routes:Routes=[
    { path: 'home', component: HomeComponent},
    {path:'',redirectTo:'',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    { path: 'register', component:RegisterComponent },
    { path: 'product', loadChildren:'./features/product/product.module#ProductModule'},

    { path: '**', component: TestComponent }

]

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'top', useHash: true })],
    exports: [RouterModule]
})
export class CustomAppRoutingModule{}