import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomizeRoutingModule } from './customize-routing.module';
import { CreatComponent } from './creat/creat.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [CreatComponent, TestComponent],
  imports: [
    CommonModule,
    CustomizeRoutingModule
  ]
})
export class CustomizeModule { }
