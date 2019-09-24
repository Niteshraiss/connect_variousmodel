import { Component, OnInit } from '@angular/core';
import { employeeservice } from '../employee.service';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {

  constructor(private employee:employeeservice) { }

  ngOnInit() {
    this.employeeDetail=this.employee.getemployee()
  }
employeeDetail=[]
}
