import { Directive, HostBinding, Input, OnChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appValidate]'
})
export class ValidateDirective implements OnChanges {

  constructor() { }
  @Input('appValidate') control: AbstractControl;
  @HostBinding('class') class:string = 'is-valid'
  ngOnChanges() {
    this.control.valueChanges.subscribe(
      () => {
        if (this.control.status == "VALID") return console.log("VALID")
        console.log("INVALID")
      }
    )
  }

}
