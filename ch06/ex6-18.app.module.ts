// 예제 6-18 comp-comm의 AppModule

// import 구문 생략

@NgModule({
  declarations: [
      AppComponent,
      CheckListComponent,
      CheckListResultComponent,
      ResultGraphComponent,
  ],
  imports: [
      BrowserModule,
      FormsModule
  ],
  providers: [CheckListDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
