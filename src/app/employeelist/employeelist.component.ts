import { Component, OnInit } from '@angular/core';
import { employeeservice } from '../employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  constructor(private employee:employeeservice) { }

  ngOnInit() {
    this.employeeDetail=this.employee.getemployee()
  }
  employeeDetail=[]
}
