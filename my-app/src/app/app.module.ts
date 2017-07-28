import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routing } from './app.route';
import { CATEGORYCOMPONENTS } from './component/category';
import { PRODUCTCOMPONENTS } from './component/product';
import { SEARCHCOMPONENTS } from './component/search';
import { CARTCOMPONENTS } from './component/cart';
import { TEMPLATECOMPONENTS } from './component/template';
import { HOMECOMPONENTS } from './component/home';


@NgModule({
  declarations: [
    AppComponent,
    CATEGORYCOMPONENTS,
    PRODUCTCOMPONENTS,
    SEARCHCOMPONENTS,
    CARTCOMPONENTS,
    TEMPLATECOMPONENTS,
    HOMECOMPONENTS,
    // ProductListComponent
  ],
  imports: [
   routing,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
