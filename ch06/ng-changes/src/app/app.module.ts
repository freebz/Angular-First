import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PropInputBindComponent } from './prop-input-bind/prop-input-bind.component';
import { NoneInputBindComponent } from './none-input-bind/none-input-bind.component';

@NgModule({
  declarations: [
      AppComponent, PropInputBindComponent, NoneInputBindComponent
  ],
  imports: [
      BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
