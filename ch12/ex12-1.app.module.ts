// 예제 12-1 AppModule에 AngularFireModule 등록

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScmMainModule } from './scm-main/scm-main.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
      /* Angular Modules */
      BrowserModule,
      
      /* App Modules */
      ScmMainModule, ProductModule, CategoryModule,
      AppRoutingModule,

      /* 3rd Modules */
      AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
