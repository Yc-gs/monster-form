import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { IInitFormData, IInitFormDataItem } from './general-dynamic-form.interface';
import { deepCopy } from '@delon/util';

@Component({
  selector: 'emr-general-dynamic-form',
  templateUrl: './general-dynamic-form.component.html',
  styleUrls: ['./general-dynamic-form.component.scss'],
})
export class GeneralDynamicFormComponent {
  @Input() public layout = 'inline';

  public get status(): string {
    return this.form.status;
  }

  public get value(): any {
    return this.form.value;
  }

  public get valid(): boolean {
    return this.form.valid;
  }

  public get invalid(): boolean {
    return this.form.invalid;
  }

  public get dirty(): boolean {
    return this.form.dirty;
  }

  public get touched(): boolean {
    return this.form.touched;
  }

  public get untouched(): boolean {
    return this.form.untouched;
  }

  public initFormDataTruthy: IInitFormData;
  public isShow = false;
  public form: FormGroup;
  constructor(
    public fb: FormBuilder,
    private _cdr: ChangeDetectorRef,
  ) { }

  @Input() public set initFormData(initFormData: IInitFormData) {
    this.initFormDataTruthy = initFormData;
  }

  @Input('form') public set params(value: FormGroup) {
    if (value instanceof FormGroup) {
      this.form = value;
      this.isShow = true;
    }
  }

  public contains(controlName: string): boolean {
    return this.form.contains(controlName);
  }

  public patchValue(value: { [key: string]: any; }, options: { onlySelf?: boolean; emitEvent?: boolean; } = {}): void {
    const parentControls = this.form.controls;
    for (const j in parentControls) {
      if (parentControls.hasOwnProperty(j)) {
        if (parentControls[j] instanceof FormArray) {
          const count = value[j].length;
          const childControl: any = parentControls[j];
          if (count > 1) {
            childControl.controls = value[j].map((m: any) => {
              const arrayConfig: any = this.initFormDataTruthy.find((k: any) => k.formControlName === j).array;
              const obj = {};
              obj.id = null;
              obj.arrayConfig = [deepCopy(arrayConfig)];
              arrayConfig.forEach((i) => {
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
            });
            this.fresh();
          }
        }
      }
    }
    this.form.patchValue(value, options);
  }

  public reset(): void {
    this.form.reset();
  }

  public fresh(): void {
    this._cdr.detectChanges();
  }

  public markAll(): void {
    for (const i in this.form.controls) {
      if (this.form.controls.hasOwnProperty(i)) {
        if (this.form.controls[i] instanceof FormArray) {
          const arrItem = this.form.controls[i] as FormArray;
          arrItem.controls.forEach((j: FormGroup) => {
            for (const m in j.controls) {
              if (j.controls.hasOwnProperty(m)) {
                j.controls[m].markAsDirty();
                j.controls[m].updateValueAndValidity();
              }
            }
          });
        } else {
          this.form.controls[i].markAsDirty();
          this.form.controls[i].updateValueAndValidity();
        }
      }
    }
  }

  public disabledAll(): void {
    for (const i in this.form.controls) {
      if (this.form.controls.hasOwnProperty(i)) {
        if (this.form.controls[i] instanceof FormArray) {
          const arrItem = this.form.controls[i] as FormArray;
          arrItem.controls.forEach((j: FormGroup) => {
            for (const m in j.controls) {
              if (j.controls.hasOwnProperty(m)) {
                j.controls[m].disable();
              }
            }
          });
        } else {
          this.form.controls[i].disable();
        }
      }
    }
  }

  public enabledAll(): void {
    for (const i in this.form.controls) {
      if (this.form.controls.hasOwnProperty(i)) {
        if (this.form.controls[i] instanceof FormArray) {
          const arrItem = this.form.controls[i] as FormArray;
          arrItem.controls.forEach((j: FormGroup) => {
            for (const m in j.controls) {
              if (j.controls.hasOwnProperty(m)) {
                j.controls[m].enable();
              }
            }
          });
        } else {
          this.form.controls[i].enable();
        }
      }
    }
  }

  public getForm(): FormGroup {
    return this.form;
  }

  public disabledItem(formControlName: string | string[], opts?: {
    onlySelf?: boolean;
    emitEvent?: boolean;
  }): void {
    if (formControlName instanceof Array) {
      formControlName.forEach((i) => {
        if (this.form.controls.hasOwnProperty(i)) {
          if (opts) {
            this.form.controls[i].disable(opts);
          } else {
            this.form.controls[i].disable();
          }
        }
      });
    } else {
      if (this.form.controls.hasOwnProperty(formControlName)) {
        if (opts) {
          this.form.controls[formControlName].disable(opts);
        } else {
          this.form.controls[formControlName].disable();
        }
      }
    }
  }

  public enabledItem(formControlName: string | string[], opts?: {
    onlySelf?: boolean;
    emitEvent?: boolean;
  }): void {
    if (formControlName instanceof Array) {
      formControlName.forEach((i) => {
        if (this.form.controls.hasOwnProperty(i)) {
          if (opts) {
            this.form.controls[i].enable(opts);
          } else {
            this.form.controls[i].enable();
          }
        }
      });
    } else {
      if (this.form.controls.hasOwnProperty(formControlName)) {
        if (opts) {
          this.form.controls[formControlName].enable(opts);
        } else {
          this.form.controls[formControlName].enable();
        }
      }
    }
  }

}
