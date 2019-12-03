import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeptComponent} from './dept/dept.component';
import {EmpComponent} from './emp/emp.component';

const routes: Routes = [
  {path:'dept', component:DeptComponent},
  {path:'emp', component:EmpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
