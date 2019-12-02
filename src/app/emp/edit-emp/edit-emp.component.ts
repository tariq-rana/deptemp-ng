import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

import { EmpService } from 'src/app/services/emp.service';
import { EmpDTO } from 'src/app/entities/emp.dto';
import { DeptEntity } from 'src/app/entities/dept.entity';
import { DeptService } from 'src/app/services/dept.service';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {
  
  public deptList:DeptEntity[]=[];

  constructor(private dialogBox: MatDialogRef<EditEmpComponent>,
    private empService: EmpService, private deptService:DeptService,
    private snackBar: MatSnackBar) { }

    ngOnInit() {
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
        
      this.empService.updateEmp(fd.empId,emp).subscribe(data => {
          this.onClose();
          this.snackBar.open("Emp Updated", 'Dismiss', { duration: 3000, verticalPosition: 'top' });
      });
    }

    findDeptAll():void{
      this.deptService.findAllDept().subscribe(dept =>{
        this.deptList = dept;
      })
  }
}
