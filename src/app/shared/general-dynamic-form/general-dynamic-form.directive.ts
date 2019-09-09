import { Directive, Input, ComponentFactoryResolver, ViewContainerRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectFieldComponent } from './components/select-field/select-field.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { DateFieldComponent } from './components/date-field/date-field.component';
import { RadioFieldComponent } from './components/radio-field/radio-field.component';
import { FlexFieldComponent } from './components/flex-field/flex-field.component';
import { SelectDoubleFieldComponent } from './components/select-double-field/select-double-field.component';
import { ArrayFieldComponent } from './components/array-field/array-field.component';
import { InputNumberFieldComponent } from './components/input-number-field/input-number-field.component';
import { CheckboxFieldComponent } from './components/checkbox-field/checkbox-field.component';
import { BlankFieldComponent } from './components/blank-field/blank-field.component';
const components = {
  'flex': FlexFieldComponent,
  'blank': BlankFieldComponent,
  'array': ArrayFieldComponent,
  'select': SelectFieldComponent,
  'select-double': SelectDoubleFieldComponent,
  'input': InputFieldComponent,
  'input-number': InputNumberFieldComponent,
  'date': DateFieldComponent,
  'radio': RadioFieldComponent,
  'checkbox': CheckboxFieldComponent,
};

@Directive({
  selector: '[emrGeneralDynamicForm]',
})
export class GeneralDynamicFormDirective implements OnInit {
  @Input() public config: any;
  @Input() public form: FormGroup;
  public component: any;

  constructor(private _resolver: ComponentFactoryResolver, private _container: ViewContainerRef) { }

  public ngOnInit(): void {
  // 动态创建
  const component = components[this.config.type];
  const factory = this._resolver.resolveComponentFactory<any>(component);
  this.component = this._container.createComponent(factory);
  // 赋值
  this.component.instance.config = this.config;
  this.component.instance.form = this.form;
  }
}
