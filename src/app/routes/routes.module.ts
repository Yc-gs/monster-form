import { NgModule } from '@angular/core';

import { SharedModule } from '@shared';
import { RouteRoutingModule } from './routes-routing.module';
// passport pages
import { UserLoginComponent } from './passport/login/login.component';
import { UserRegisterComponent } from './passport/register/register.component';
import { UserRegisterResultComponent } from './passport/register-result/register-result.component';
// single pages
import { UserLockComponent } from './passport/lock/lock.component';
import { DocumentInstallComponent } from './document/document-install/document-install.component';
import { DocumentStartComponent } from './document/document-start/document-start.component';
import { DocumentContentComponent } from './document/document-content/document-content.component';

const COMPONENTS = [
  DocumentInstallComponent,
  DocumentStartComponent,
  DocumentContentComponent,
  // passport pages
  UserLoginComponent,
  UserRegisterComponent,
  UserRegisterResultComponent,
  // single pages
  UserLockComponent,
];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, RouteRoutingModule],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
    DocumentInstallComponent,
    DocumentStartComponent,
    DocumentContentComponent,
  ],
  entryComponents: COMPONENTS_NOROUNT,
})
export class RoutesModule {}
