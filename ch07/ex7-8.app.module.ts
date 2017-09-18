// 예제 7-8 contacts-manager/src/app/app.module.ts [ch7-1]

// 임포트 생략

import { AppComponent } from './app.component';
import { UserService } from './user/user.service';

@NgModule({
  declarations: [ ... ],
  imports: [ ... ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
