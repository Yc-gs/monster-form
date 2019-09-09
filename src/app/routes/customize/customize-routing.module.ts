import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatComponent } from './creat/creat.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', redirectTo: 'creat', pathMatch: 'full' },
  { path: 'creat', component: CreatComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomizeRoutingModule {}
