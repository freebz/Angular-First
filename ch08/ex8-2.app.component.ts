// 예제 8-2 폼의 NgModel Validation

@Component({ ... })
export class AppComponent implements OnInit {
    myData: any;
    @ViewChild('myModel') myNgModel: NgModel;
    validResult: boolean;

    ngOnInit() {
	this.myNgModel.valueChanges.subscribe(v => console.log(`value: ${v}`));
	this.myNgModel.statusChanges.subscribe(s => console.log(`status: ${s}`));
    }

    checkValid() {
	this.validResult = this.myNgModel.valid;
    }
}
