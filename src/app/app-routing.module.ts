import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path : '', redirectTo : 'home', pathMatch : 'full'
  }, 
  {
    path : 'home', component : HomeComponent
  },
  {
    path : 'signin', component : SigninComponent
  },
  {
    path : 'register', component : RegisterComponent
  },
  {
    path : 'products', component : ProductsComponent
  },
  {
    path : 'product/:id', component : ProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
