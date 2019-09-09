import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { deepCopy } from '@delon/util';

@Component({
  selector: 'emr-checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.scss', '../component.scss'],
})
export class CheckboxFieldComponent implements OnInit {
  public config: any;
  public form: FormGroup;
  public options: any[];

  public ngOnInit(): void {
    if (this.config.control && 'options' in this.config.control) {
      this.options = deepCopy(this.config.control.options);
    }
  }
}
