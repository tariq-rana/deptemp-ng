import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {UiModule } from './ui.module';
import { EmpComponent } from './emp/emp.component';
import { DeptComponent } from './dept/dept.component';
import { ShowEmpComponent } from './emp/show-emp/show-emp.component';
import { AddEmpComponent } from './emp/add-emp/add-emp.component';
import { EditEmpComponent } from './emp/edit-emp/edit-emp.component';
import { ShowDeptComponent } from './dept/show-dept/show-dept.component';
import { AddDeptComponent } from './dept/add-dept/add-dept.component';
import { EditDeptComponent } from './dept/edit-dept/edit-dept.component';

import { DeptService } from './services/dept.service';
import { EmpService } from './services/emp.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    DeptComponent,
    ShowEmpComponent,
    AddEmpComponent,
    EditEmpComponent,
    ShowDeptComponent,
    AddDeptComponent,
    EditDeptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UiModule
  ],
  providers: [DeptService,EmpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
