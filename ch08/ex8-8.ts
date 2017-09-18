// 예제 8-8 커스텀 Validator 코드 템플릿

import { Directive, Input, forwardRef } from '@angular/core';
import { AbstractControl, Validator } from '@angular/forms';

export const CUSTOM_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => CustomValidator),
    multi: true
};

@Directive({
    selector: '[myOwnValidate][ngModel]',
    providers: [CUSTOM_VALIDATOR]
})
export class CustomValidator implements Validator {

    validate(control: AbstractControl): { [key: string]: any } {
	// control.value
	return null;
    }
}
