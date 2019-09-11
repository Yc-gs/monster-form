import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { deepCopy } from '@delon/util';

@Component({
  selector: 'emr-array-field',
  templateUrl: './array-field.component.html',
  styleUrls: ['./array-field.component.scss'],
})
export class ArrayFieldComponent implements OnInit {
  public config: any;
  public form: FormGroup;
  public formArray: FormArray;
  constructor(
    private _fb: FormBuilder,
  ) { }

  public ngOnInit(): void {
    this.formArray = this.form.get(this.config.formControlName) as FormArray;
  }

  public add(): void {
    const obj = {};
    obj.id = null;
    obj.arrayConfig = [deepCopy(this.config.array)];
    this.config.array.forEach((i: any) => {
      if (i.type === 'select-double') {
        const arr = [null];
        const arrDouble = [null];
        if (i.required) {
          arr.push([Validators.required]);
          arrDouble.push([Validators.required]);
        }
        obj[i.formControlName] = arr;
        obj[i.formControlNameDouble] = arrDouble;
      } else {
        const arr = [null];
        if (i.required) {
          arr.push([Validators.required]);
        }
        if (i.formControlName) {
          obj[i.formControlName] = arr;
        }
      }
    });
    (this.form.get(this.config.formControlName) as FormArray).push(this._fb.group(obj));
  }

  public delete(index: number): void {
    (this.form.get(this.config.formControlName) as FormArray).removeAt(index);
  }

}
