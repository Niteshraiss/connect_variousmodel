import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { employeeservice } from './employee.service';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    EmployeedetailComponent,
    EmployeelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [employeeservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
