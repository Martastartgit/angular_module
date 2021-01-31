import {Directive} from '@angular/core';
import {FormControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: '[appFormValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: FormValidatorDirective, multi: true}]

})
export class FormValidatorDirective implements Validator{
  constructor() { }
  validate(age: FormControl): any {
    const ageNumber: number = age.value;
    if (ageNumber <= 10) {
      return {error: true, msg: 'Age is too small'};
    }
    return null;
  }
}
