import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// delon
import { AlainThemeModule } from '@delon/theme';
import { DelonABCModule } from '@delon/abc';
import { DelonChartModule } from '@delon/chart';
import { DelonACLModule } from '@delon/acl';
import { DelonFormModule } from '@delon/form';
// i18n
import { TranslateModule } from '@ngx-translate/core';

// #region third libs
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CountdownModule } from 'ngx-countdown';
import { UEditorModule } from 'ngx-ueditor';
import { NgxTinymceModule } from 'ngx-tinymce';
import { GeneralDynamicFormComponent } from './general-dynamic-form/general-dynamic-form.component';
import { FlexFieldComponent } from './general-dynamic-form/components/flex-field/flex-field.component';
import { BlankFieldComponent } from './general-dynamic-form/components/blank-field/blank-field.component';
import { ArrayFieldComponent } from './general-dynamic-form/components/array-field/array-field.component';
import { SelectFieldComponent } from './general-dynamic-form/components/select-field/select-field.component';
import { SelectDoubleFieldComponent } from './general-dynamic-form/components/select-double-field/select-double-field.component';
import { InputFieldComponent } from './general-dynamic-form/components/input-field/input-field.component';
import { InputNumberFieldComponent } from './general-dynamic-form/components/input-number-field/input-number-field.component';
import { DateFieldComponent } from './general-dynamic-form/components/date-field/date-field.component';
import { RadioFieldComponent } from './general-dynamic-form/components/radio-field/radio-field.component';
import { CheckboxFieldComponent } from './general-dynamic-form/components/checkbox-field/checkbox-field.component';
import { GeneralDynamicFormDirective } from './general-dynamic-form/general-dynamic-form.directive';

const THIRDMODULES = [NgZorroAntdModule, CountdownModule, UEditorModule, NgxTinymceModule];
// #endregion

// #region your componets & directives
const COMPONENTS = [GeneralDynamicFormComponent];
const WIDGETS = [
  FlexFieldComponent,
  BlankFieldComponent,
  ArrayFieldComponent,
  SelectFieldComponent,
  SelectDoubleFieldComponent,
  InputFieldComponent,
  InputNumberFieldComponent,
  DateFieldComponent,
  RadioFieldComponent,
  CheckboxFieldComponent,
];
const DIRECTIVES = [GeneralDynamicFormDirective];
// #endregion

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AlainThemeModule.forChild(),
    DelonABCModule,
    DelonChartModule,
    DelonACLModule,
    DelonFormModule,
    // third libs
    ...THIRDMODULES,
  ],
  declarations: [
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
    ...WIDGETS,
  ],
  entryComponents: [...WIDGETS],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AlainThemeModule,
    DelonABCModule,
    DelonChartModule,
    DelonACLModule,
    DelonFormModule,
    // i18n
    TranslateModule,
    // third libs
    ...THIRDMODULES,
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
})
export class SharedModule {}
