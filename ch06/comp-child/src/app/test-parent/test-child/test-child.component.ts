import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'test-child',
    template: `
    <label>check me</label><input type="checkbox" [(ngModel)]="isChecked">
    `
})
export class TestChildComponent {
    isChecked: boolean;

    constructor() {
	this.isChecked = false;
    }

}
