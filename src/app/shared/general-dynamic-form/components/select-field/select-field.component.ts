import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { deepCopy } from '@delon/util';
import { Subject } from 'rxjs';
import { pluck, debounceTime, switchMap, map } from 'rxjs/operators';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'emr-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss', '../component.scss'],
})
export class SelectFieldComponent implements OnInit {
  public config: any;
  public initList: any[];
  public form: FormGroup;
  public count = 0;
  public longData: any[];
  public longDataCopy: any[];
  public searchChange$: Subject<any> = new Subject();
  public isLoading = false;
  public formControl: FormControl;
  constructor(private _http: _HttpClient) {}

  public ngOnInit(): void {
    this.formControl = this.form.get(this.config.formControlName) as FormControl;
    this.initList = this.config.control.options;
    this._initData();
    if (this.config.asyncSearchUrl) {
      const initDataParams = {
        PageIndex: 1,
        PageSize: 50,
      };
      // tslint:disable-next-line:max-line-length
      const getList = (SearchText: string) =>
        this._http
          .get(this.config.asyncSearchUrl, { params: { SearchText, ...initDataParams } })
          .pipe(pluck('data', 'items'));
      this.searchChange$
        .asObservable()
        .pipe(debounceTime(500))
        .pipe(switchMap(getList))
        .pipe(
          map((i: any[]) => {
            return this.handleArr(i, this.config.labelKey, this.config.valueKey, this.config.extraKeys);
          }),
        )
        .subscribe((data: any) => {
          this.count = 0;
          this.longDataCopy = data;
          this.longData = this.longDataCopy.slice(0, 10);
          this.isLoading = false;
          this.count += 10;
        });
    }
  }

  public handleArr(
    data: any[],
    labelKey: string,
    valueKey: string,
    extraKeys?: string[],
  ): Array<{
    label: string;
    value: any;
  }> {
    if (extraKeys) {
      return data.map(d => {
        let obj = {};
        extraKeys.forEach(e => {
          obj = {
            ...obj,
            [e]: d[e],
          };
        });
        return {
          label: d[labelKey],
          value: d[valueKey],
          ...obj,
        };
      });
    } else {
      return data.map(d => {
        return {
          label: d[labelKey],
          value: d[valueKey],
        };
      });
    }
  }

  public scrollToBottom(): void {
    this.longData = this.longDataCopy.slice(0, this.count + 10);
    this.count += 10;
  }

  public handleSearch(args: string): void {
    this.isLoading = true;
    if (args) {
      this.searchChange$.next(args);
    } else {
      this._initData();
      this.isLoading = false;
    }
  }

  public actionSelect(action: boolean): void {
    if (!action) {
      this._initData();
    }
  }

  // c1代表当前option | c2代表传入的值
  public compareFn(c1: any, c2: any): boolean {
    if (typeof c1 === 'object') {
      if (typeof c2 === 'object') {
        return c1.value === c2.value;
      } else {
        return c1.value === c2;
      }
    } else {
      return c1 === c2;
    }
  }

  public handleChange(opt: any): void {
    if (this.config.callback) {
      if (this.form.controls.arrayConfig) {
        this.config.callback(opt, this.form);
      } else {
        this.config.callback(opt);
      }
    }
  }

  private _initData(): void {
    this.count = 0;
    this.longData = deepCopy(this.initList);
    this.longDataCopy = deepCopy(this.initList);
  }
}
