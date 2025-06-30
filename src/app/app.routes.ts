import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:''
    },
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'products',
        component:ProductsComponent
    },
    {
        path:'products/:id',
        component:ProductDetailComponent
    },
    {
        path:'products/category/:category',
        component:ProductsComponent
    }
];
