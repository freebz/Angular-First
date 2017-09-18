// 예제 11-5 핵심 모듈을 적용한 AppModule

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScmMainModule } from './scm-main/scm-main.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
      /* Angular Modules */
      BrowserModule,
      
      /* App Modules */
      ScmMainModule, ProductModule, CategoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
