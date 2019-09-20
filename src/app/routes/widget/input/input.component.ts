import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GeneralDynamicFormService } from '@shared/general-dynamic-form/general-dynamic-form.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less'],
})
export class InputComponent implements OnInit {
  constructor(private _generalService: GeneralDynamicFormService, private fb: FormBuilder) {
    this.initFormData = [
      {
        sId: 5,
        type: 'input-number',
        required: true,
        formControlName: 'operationDurationTime',
        extra: '小时',
        label: {
          alias: '手术时长',
          width: 81,
          className: 'operation-application-label',
        },
        control: {
          width: 84,
          disabled: false,
          options: [],
        },
      },
      {
        sId: 3,
        type: 'radio',
        required: true,
        formControlName: 'operationTypeCode',
        label: {
          alias: '手术类型',
          width: 81,
          className: 'operation-application-label',
        },
        control: {
          width: 220,
          disabled: false,
          options: [{ value: '0', label: '择期' }, { value: '1', label: '急诊' }],
        },
      },
      {
        sId: 4,
        type: 'date',
        nzDisabledDate: true,
        nzDisabledTime: true,
        required: true,
        formControlName: 'proposedOperationTime',
        returnObj: true,
        label: {
          alias: '拟行手术日期',
          width: 109,
          className: 'operation-application-label',
        },
        control: {
          width: 220,
          disabled: false,
        },
      },
      {
        sId: 6,
        type: 'flex',
      },
      {
        sId: 5,
        type: 'input-number',
        required: true,
        formControlName: 'operationDurationTim2e',
        extra: '小时',
        label: {
          alias: '手术时长',
          width: 81,
          className: 'operation-application-label',
        },
        control: {
          width: 84,
          disabled: false,
          options: [],
        },
      },
      {
        sId: 3,
        type: 'radio',
        required: true,
        formControlName: 'operationTypeCod1e',
        label: {
          alias: '手术类型',
          width: 81,
          className: 'operation-application-label',
        },
        control: {
          width: 220,
          disabled: false,
          options: [{ value: '0', label: '择期' }, { value: '1', label: '急诊' }],
        },
      },
      {
        sId: 4,
        type: 'date',
        nzDisabledDate: true,
        nzDisabledTime: true,
        required: true,
        formControlName: 'proposedOperatio2nTime',
        returnObj: true,
        label: {
          alias: '拟行手术日期',
          width: 109,
          className: 'operation-application-label',
        },
        control: {
          width: 220,
          disabled: false,
        },
      },
    ];
  }
  @ViewChild('mForm', { static: false }) public mForm: any;
  public form: FormGroup;
  public initFormData: any;

  validateForm: FormGroup;

  ngOnInit() {
    this.form = this._generalService.handleFormJson(this.initFormData);
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
}
