import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';

import { DeptEntity } from 'src/app/entities/dept.entity';
import { EmpService } from 'src/app/services/emp.service';
import { EmpDTO } from 'src/app/entities/emp.dto';
import { DeptService } from 'src/app/services/dept.service';
import { CompileMetadataResolver } from '@angular/compiler';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  public deptList:DeptEntity[]=[];

  constructor(private dialogBox: MatDialogRef<AddEmpComponent>,
    private empService: EmpService, private deptService:DeptService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.resetForm();
    this.findDeptAll();
  }

  onClose() {
    this.empService.filter('Register click');
    this.dialogBox.close();

  }

  onSubmit(form: NgForm) {
   
    let fd = this.empService.formData;
    const dept:DeptEntity={
      deptId:fd.deptId, 
      deptName:fd.deptName
    }

    const emp:EmpDTO ={
      empName: fd.empName,
      mailId: fd.mailId,
      joinDate: fd.joinDate,
      dept: dept
    };
      
    this.empService.insertEmp(emp).subscribe(data => {
        this.onClose();
        this.snackBar.open("Emp Added", 'Dismiss', { duration: 3000, verticalPosition: 'top' });
    });
  }

  resetForm(form?: NgForm) {
    this.empService.formData = {
      empId: 0,
      empName: '',
      mailId: '',
      joinDate: null,
      deptId: 0,
      deptName: ''

    }

    if (form != null) {
      form.resetForm(this.empService.formData);
    }
  }


   findDeptAll():void{
      this.deptService.findAllDept().subscribe(dept =>{
        this.deptList = dept;
      })
  }

}
