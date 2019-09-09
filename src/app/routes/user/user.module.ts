import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CenterComponent } from './center/center.component';
import { SettingComponent } from './setting/setting.component';


@NgModule({
  declarations: [CenterComponent, SettingComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
