import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'emr-select-double-field',
  templateUrl: './select-double-field.component.html',
  styleUrls: ['./select-double-field.component.scss', '../component.scss'],
})
export class SelectDoubleFieldComponent {
  public config: any;
  public form: FormGroup;

  // c1代表当前option | c2代表传入的值
  public compareFn(c1: any, c2: any): boolean {
    if (typeof c1 === 'object') {
      if (typeof c2 === 'object') {
        return c1.value === c2.value;
      } else {
        return c1.value === c2;
      }
    } else {
      return c1 === c2;
    }
  }

  public handleChangeFirst(opt: any): void {
    if (this.config.callback) {
      if (this.form.controls.arrayConfig) {
        this.config.callback(opt, this.form);
      } else {
        this.config.callback(opt);
      }
    }
  }

  public handleChangeSecond(opt: any): void {
    if (this.config.callbackSecond) {
      if (this.form.controls.arrayConfig) {
        this.config.callbackSecond(opt, this.form);
      } else {
        this.config.callbackSecond(opt);
      }
    }
  }

}
