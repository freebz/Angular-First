// 예제 13-37 MainDashboardComponent 속성 및 생성자

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'scm-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {
    fetchBarChartData = false;
    barData: any[];
    barChartLabels = ['판매 대기', '판매 중', '판매 중지'];
    barChartOptions;

    fetchPieChartData = false;
    pieData: number[];
    pieChartLabels: string[];

    constructor(private database: DataStoreService) {
	this.barData = [];
	this.pieData = [];
	this.pieChartLabels = [];
    }

    ngOnInit() {
    }

}
