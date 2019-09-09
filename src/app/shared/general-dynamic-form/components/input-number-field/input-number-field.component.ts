import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'emr-input-number-field',
  templateUrl: './input-number-field.component.html',
  styleUrls: ['./input-number-field.component.scss', '../component.scss'],
})
export class InputNumberFieldComponent {
  public config: any;
  public form: FormGroup;
}
