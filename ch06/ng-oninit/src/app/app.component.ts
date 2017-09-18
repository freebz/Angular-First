import { Component } from '@angular/core';

@Component({
    selector: 'sample-app',
    template: `
    <h2>ngOnInit and ngOnDestroy</h2>
    <button type="button" (click)="toggle = !toggle">toggle</button>
    <sample-cmp *ngIf="toggle" [exContent]="sampleContent"></sample-cmp>
    `,
})
export class AppComponent {
    toggle: boolean = false;
    sampleContent: string = "ngOnInit & ngOnDestroy";
    constructor() { }
}
