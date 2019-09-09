import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'emr-blank-field',
  templateUrl: './blank-field.component.html',
  styleUrls: ['./blank-field.component.scss', '../component.scss'],
})
export class BlankFieldComponent {
  public config: any;
  public form: FormGroup;
}
