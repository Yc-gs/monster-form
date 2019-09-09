import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'emr-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss', '../component.scss'],
})
export class InputFieldComponent {

  public config: any;
  public form: FormGroup;

}
