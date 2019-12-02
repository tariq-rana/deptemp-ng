import { Component, OnInit } from '@angular/core';
import { EmpService } from 'src/app/services/emp.service';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { EmpDTO } from 'src/app/entities/emp.dto';
import { DeptEntity } from 'src/app/entities/dept.entity';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {
  constructor(private dialogBox: MatDialogRef<EditEmpComponent>,
    private empService: EmpService,
    private snackBar: MatSnackBar) { }

    ngOnInit() {
  
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
        if (data.empName === fd.empName) {
          this.onClose();
          this.snackBar.open("Emp Updated", 'Dismiss', { duration: 3000, verticalPosition: 'top' });
  
        }
      });
    }
}
