// 예제 11-15 AppModule에 AppRoutingModule 임포트

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScmMainModule } from './scm-main/scm-main.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
      /* Angular Modules */
      BrowserModule,
      
      /* App Modules */
      ScmMainModule, ProductModule, CategoryModule,
      AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
