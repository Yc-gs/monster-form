import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'emr-flex-field',
  templateUrl: './flex-field.component.html',
  styleUrls: ['./flex-field.component.scss'],
})
export class FlexFieldComponent {

  public config: any;
  public form: FormGroup;
}
