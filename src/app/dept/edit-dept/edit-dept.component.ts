import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { DeptService } from 'src/app/services/dept.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-dept',
  templateUrl: './edit-dept.component.html',
  styleUrls: ['./edit-dept.component.css']
})
export class EditDeptComponent implements OnInit {

  constructor(private dialogBox: MatDialogRef<EditDeptComponent>,
    private deptService: DeptService,
    private snackBar: MatSnackBar) { }

    ngOnInit() {
      
  
    }
  
    onClose() {
      this.deptService.filter('Register click');
      this.dialogBox.close();
  
    }
  
    onSubmit(form: NgForm) {
      this.deptService.updateDept(this.deptService.formData.deptId,{deptName: this.deptService.formData.deptName }).subscribe(data => {
        if (data.deptName === this.deptService.formData.deptName) {
          this.onClose();
          this.snackBar.open("Dept Updated", 'Dismiss', { duration: 3000, verticalPosition: 'top' });
  
        }
      });
    }
  
}
