// 예제 13-39 MainDashboardComponent의 Pie 차트 구현 코드

import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../shared/data-store.service';
import { ProdStatus } from '../../product/product.model';
import { Observable } from 'rxjs/Observable';

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
	this.makeBarChart();
	this.makePieChart();
    }

    private makeBarChart() {
	const waitForSale$ = this.database
	    .findList$ByQuery('product', 'status', ProdStatus.WAIT_FOR_SALE)
	    .map(r => r.length);
	const onSale$ = this.database
	    .findList$ByQuery('product', 'status', ProdStatus.ON_SALE)
	    .map(r => r.length);
	const notForSale$ = this.database
	    .findList$ByQuery('product', 'status', ProdStatus.NOT_FOR_SALE)
	    .map(r => r.length);

	Observable.zip(waitForSale$, onSale$, notForSale$)
	    .do(statData => this.makeBarChartDataset(statData))
		.do(statData => this.makeBarChartOptions(statData))
		    .subscribe(() => this.fetchBarChartData = true);
    }

    private makeBarChartDataset(statData: number[]) {
	this.barData.push({data: [statData[0]], label: this.barChartLabels[0]});
	this.barData.push({data: [statData[1]], label: this.barChartLabels[1]});
	this.barData.push({data: [statData[2]], label: this.barChartLabels[2]});
    }

    private makeBarChartOptions(statData: number[]) {
	const maxNum = statData.reduce(function (a, b) {
	    return Math.max(a, b);
	});

	this.barChartOptions = {scales: {xAxes: [{ticks: {max: maxNum, min: 0, stepSize: 1}}]}};
    }

    private makePieChart() {
	this.database.findList$('categories')
	    .take(1)
	    .mergeMap((cats: Categories) => Observable.from(cats))
	    .filter(cat => cat.isUse)
	    .mergeMap(cat =>
		      this.database.findList$ByQuery('products', 'catNo', cat.no.toString())
		      .map(products => [cat, products.length])
		     )
	    .do(result => {
		this.pieData.push(result[1]);
		this.pieChartLabels.push(result[0].name);
	    })
		.subscribe(null, null, () => this.fetchPieChartData = true);
    }
}
