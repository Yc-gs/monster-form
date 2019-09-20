import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetRoutingModule } from './widget-routing.module';
import { InputComponent } from './input/input.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { FlexComponent } from './flex/flex.component';
import { BlankComponent } from './blank/blank.component';
import { ArrayComponent } from './array/array.component';
import { SelectComponent } from './select/select.component';
import { SelectDoubleComponent } from './select-double/select-double.component';
import { DateComponent } from './date/date.component';
import { RadioComponent } from './radio/radio.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [
    InputComponent,
    InputNumberComponent,
    FlexComponent,
    BlankComponent,
    ArrayComponent,
    SelectComponent,
    SelectDoubleComponent,
    DateComponent,
    RadioComponent,
    CheckboxComponent,
  ],
  imports: [CommonModule, SharedModule, WidgetRoutingModule],
})
export class WidgetModule {}
