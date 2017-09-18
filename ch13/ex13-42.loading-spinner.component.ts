// 예제 13-42 LoadingSpinnerComponent 클래스 코드

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'scm-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {
    loading: boolean;

    constructor(spinner: SpinnerService) {
	spinner.getLoading$().subscribe(l => this.loading = l);
    }
    
    ngOnInit() {
    }
    
}
