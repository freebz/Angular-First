// 예제 12-15 신규 모듈이 추가된 AppModule 클래스 코드

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScmMainModule } from './scm-main/scm-main.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SharedModule } from './shared/shared.module';
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
      AngularFireAuthModule,
      AngularFireDatabaseModule,
      SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
