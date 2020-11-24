import { Component, OnInit } from '@angular/core';
import {Employee} from '../model/employee';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee = new Employee()

  constructor(private router: Router, private route: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployee(this.route.snapshot.params['id'])
      .subscribe(resp => {
        this.employee = resp
      })
  }

  list(){
    this.router.navigate(['employees'])
  }

}
