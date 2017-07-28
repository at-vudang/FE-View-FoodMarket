import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryComponent} from './component/category/category.component';
import {SearchComponent} from './component/search/search.component';
import {ProductComponent} from './component/product/product.component';
import {CartComponent} from './component/cart/cart.component';
import {NotFoundComponent} from './component/template/not-found/not-found.component';
import {OrderMealsComponent} from './component/order-meals/order-meals.component';
const appRoutes: Routes = [

  { path: 'category', component: CategoryComponent },
  { path: '', component: SearchComponent },
  { path: 'search', component: SearchComponent },
  { path: 'order-meals', component: OrderMealsComponent },
  { path: 'detail/:id',      component: ProductComponent },
  {
    path: 'cart',
    component: CartComponent,
    data: { title: 'Cart List' }
  },
  { path: 'sss',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
