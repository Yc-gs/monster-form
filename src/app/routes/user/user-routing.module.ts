import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingComponent } from './setting/setting.component';
import { CenterComponent } from './center/center.component';

const routes: Routes = [
  { path: '', redirectTo: 'center', pathMatch: 'full' },
  { path: 'center', component: CenterComponent, data: { title: 'center' } },
  { path: 'setting', component: SettingComponent, data: { title: 'setting' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
