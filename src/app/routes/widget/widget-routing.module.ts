import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  { path: '', redirectTo: 'input', pathMatch: 'full' },
  { path: 'input', component: InputComponent, data: { title: 'input' } },
  { path: 'input-number', component: InputNumberComponent, data: { title: 'input-number' } },
  { path: 'flex', component: FlexComponent, data: { title: 'flex' } },
  { path: 'blank', component: BlankComponent, data: { title: 'blank' } },
  { path: 'array', component: ArrayComponent, data: { title: 'array' } },
  { path: 'select', component: SelectComponent, data: { title: 'select' } },
  { path: 'select-double', component: SelectDoubleComponent, data: { title: 'select-double' } },
  { path: 'date', component: DateComponent, data: { title: 'date' } },
  { path: 'radio', component: RadioComponent, data: { title: 'radio' } },
  { path: 'checkbox', component: CheckboxComponent, data: { title: 'checkbox' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WidgetRoutingModule {}
