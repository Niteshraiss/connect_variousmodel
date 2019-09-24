import { Injectable } from '@angular/core';
@Injectable()

export class employeeservice
{
    employeeDetail=[{id:1,name:'abc',dept:'cse'},
    {id:2,name:'def',dept:'cse'},
    {id:3,name:'ijk',dept:'cse'}]

    getemployee()
    {
        return this.employeeDetail
    }
    setemployee(emp)
    {
     //this is responsible for adding a data from input section to list  
        this.employeeDetail.push(emp)
        ///emp object is coming from app.component.ts
    }
}