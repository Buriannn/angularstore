import { Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';

export const routes: Routes = [
    {path: 'electronics', component: ProductsListComponent},
    {path: 'jewelery', component: ProductsListComponent},

];
