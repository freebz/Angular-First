// 예제 5-2 컴포넌트에서 서비스 사용

// 임포트 생략
import { CalculatorService } from '../calculator.service';

@Component({ .. })
export class CalculatorComponent {
    private result: number;
    private anotherResult: number;
    private calculator: CalculatorService;

    constructor() {
	this.calculator = new CalculatorService();
    }

    add(a, b) {
	this.result = this.calculator.add(a, b);
    }

    addAnother(a, b) {
	this.anotherResult = this.calculator.add(a, b);
    }
}
