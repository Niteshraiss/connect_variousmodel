import { Component } from '@angular/core';
import { employeeservice } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newapp';
  emp_id;
  emp_name;
  emp_dept;
  constructor(private emp:employeeservice){}
 myemployee={
  id:1,
  name:'',
  dept:''
}
  addemployee()
  {
    this.myemployee.id=this.emp_id; //assigning values to obj
    this.myemployee.name=this.emp_name;
    this.myemployee.dept=this.emp_dept;
    this.emp.setemployee(this.myemployee);//passing a obj to method present in employee.service.ts
  }
}
