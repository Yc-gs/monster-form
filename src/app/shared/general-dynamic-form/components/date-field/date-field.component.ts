import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { differenceInCalendarDays } from 'date-fns';

@Component({
  selector: 'emr-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.scss', '../component.scss'],
})
export class DateFieldComponent {

  public config: any;
  public form: FormGroup;
  public today: Date = new Date();
  public currentHours: number;
  public currentTime: Date;

  public handleDate(date: any): void {
    if (date) {
      const time = new Date(date);
      // tslint:disable-next-line:max-line-length
      const timeStr = `${time.getFullYear()}/${time.getMonth() + 1}/${time.getDate()} ${time.getHours()}:${time.getMinutes()}`;
      this.form.patchValue({
        [this.config.formControlName]: timeStr,
      });
    }
  }

  public disabledStartDate = (current: Date): boolean => {
    this.currentTime = current;
    this.currentHours = current.getHours();
    return differenceInCalendarDays(current, this.today) < 0;
  }

  public disabledDateTime = (): object => {
    return {
      nzDisabledHours: () => {
        if (this.currentTime.getDay() === this.today.getDay()) {
          return this.range(0, 24)
            .splice(0, this.today.getHours());
        } else {
          return [];
        }
      },
      nzDisabledMinutes: () => {
        if (this.currentTime.getDay() === this.today.getDay() && this.currentHours === this.today.getHours()) {
          return this.range(0, 60)
            .splice(0, this.today.getMinutes());
        } else {
          return [];
        }
      },
      // nzDisabledSeconds: () => [ 55, 56 ]
    };
  }

  public range(start: number, end: number): number[] {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }
}
