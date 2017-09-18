// 예제 6-38 ngOnChanges 사용

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TempData } from '../temp-data/temp-data.model';

@Component({
  selector: 'prop-input-bind',
  template: `
  <h4>PropInputBindComponent</h4>
  <p>myNum: {{myNum}}</p>
  <p>myStr: {{myStr}}</p>
  <p>tempData.content</p>
  `,
})
export class PropInputBindComponent implements OnChanges {
  @Input() myNum: number;
  @Input() myStr: string;
  @Input() tempData: TempData;
  
  constructor() { ;

  }
  
  ngOnChanges(changes: SimpleChanges) {
    if(changes.myNum && !changes.myNum.isFirstChange()) {
      // exteranl API call or more preprocessing...
    }
    
    for (let propName in changes) {
      let change = changes[propName];
      console.dir(change);
      if(change.isFirstChange()) {
        console.log(`first change: ${propName}`);
      } else {
        console.log(`prev: ${change.previousValue}, cur: ${change.currentValue}`);
      }
    }
  }
}
