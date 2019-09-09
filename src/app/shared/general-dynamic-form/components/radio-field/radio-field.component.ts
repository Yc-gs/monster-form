import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'emr-radio-field',
  templateUrl: './radio-field.component.html',
  styleUrls: ['./radio-field.component.scss', '../component.scss'],
})
export class RadioFieldComponent {

  public config: any;
  public form: FormGroup;

  public handleChange(opt: any): void {
    if (this.config.callback) {
      if (this.form.controls.arrayConfig) {
        this.config.callback(opt, this.form);
      } else {
        this.config.callback(opt);
      }
    }
  }
}
