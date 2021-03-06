// 예제 12-7 파이어베이스 인증 설정 정보를 추가한 AppModule

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScmMainModule } from './scm-main/scm-main.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

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
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
