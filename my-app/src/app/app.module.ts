import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CartComponent } from './ShopCart/cart.component';
import { HeaderComponent } from './Template/header/header.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './Template/footer/footer.component';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { QuickviewComponent } from './category/quickview/quickview.component';
import { ProductsListComponent } from './category/products-list/products-list.component';
import { CategoryHeaderComponent } from './category/category-header/category-header.component';
import { ProductItemComponent } from './category/products-list/product-item/product-item.component';
import { ProductBlockComponent } from './category/products-list/product-item/product-block/product-block.component';
import { CategoryBlockComponent } from './category/category-block/category-block.component';
import { FilterProductComponent } from './category/filter-product/filter-product.component';
import { CartHeaderComponent } from './ShopCart/cart-header/cart-header.component';
import { ListProductCartComponent } from './ShopCart/list-product-cart/list-product-cart.component';
import { ListButtonCartComponent } from './ShopCart/list-button-cart/list-button-cart.component';
import { PaginationComponent } from './Template/pagination/pagination.component';
import { SearchBlockComponent } from './search/search-block/search-block.component';
import { ProductListSearchComponent } from './search/product-list-search/product-list-search.component';
import { ProductBlockSearchComponent } from './search/product-list-search/product-block-search/product-block-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    ProductComponent,
    CategoryComponent,
    QuickviewComponent,
    ProductsListComponent,
    CategoryHeaderComponent,
    ProductItemComponent,
    ProductBlockComponent,
    CategoryBlockComponent,
    FilterProductComponent,
    CartHeaderComponent,
    ListProductCartComponent,
    ListButtonCartComponent,
    PaginationComponent,
    SearchBlockComponent,
    ProductListSearchComponent,
    ProductBlockSearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
