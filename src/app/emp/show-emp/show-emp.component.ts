import { Component, OnInit } from '@angular/core';
import { EmpService } from 'src/app/services/emp.service';
import { EmpEntity } from 'src/app/entities/emp.entity';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {
  constructor(private readonly empService:EmpService) { }
  dataSourceEmp: EmpEntity[];
  

  ngOnInit() {
    this.findAllEmp();
  }
 
  findAllEmp(){
    this.empService.findAllEmp().subscribe(emp=>{
        this.dataSourceEmp = emp;

        console.log(emp);
    })
}
}
