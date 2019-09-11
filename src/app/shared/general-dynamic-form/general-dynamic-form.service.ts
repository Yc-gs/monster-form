import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IInitFormDataItem, IInitFormData } from './general-dynamic-form.interface';
import { deepCopy } from '@delon/util';

@Injectable({
  providedIn: 'root',
})
export class GeneralDynamicFormService {
  public form: FormGroup;

  constructor(
    public fb: FormBuilder,
  ) { }

  public handleFormJson(initFormDataTruthy: any): FormGroup {
    const obj: any = {};
    initFormDataTruthy.forEach((i) => {
      if (i.type === 'array') {
        obj[i.formControlName] = this.fb.array([this._initDetailInfo(i.array)], Validators.required);
      } else if (i.type === 'select-double') {
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
    return this.fb.group(obj);
  }

  private _initDetailInfo(array: IInitFormDataItem[]): FormGroup {
    const obj = {};
    obj.id = null;
    obj.arrayConfig = [deepCopy(array)];
    array.forEach((i) => {
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
    return this.fb.group(obj);
  }
}
