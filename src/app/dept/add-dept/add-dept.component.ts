import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DeptService } from 'src/app/services/dept.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-dept',
  templateUrl: './add-dept.component.html',
  styleUrls: ['./add-dept.component.css']
})
export class AddDeptComponent implements OnInit {

  constructor(private dialogBox: MatDialogRef<AddDeptComponent>,
    private deptService: DeptService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.resetForm();

  }

  onClose() {
    this.deptService.filter('Register click');
    this.dialogBox.close();

  }

  onSubmit(form: NgForm) {
    this.deptService.insertDept({ deptName: this.deptService.formData.deptName }).subscribe(data => {
      if (data.deptName === this.deptService.formData.deptName) {
        this.onClose();
        this.snackBar.open("Dept Added", 'Dismiss', { duration: 3000, verticalPosition: 'top' });

      }
    });
  }

  resetForm(form?: NgForm) {
    this.deptService.formData = {
      deptId: 0,
      deptName: ''
    }

    if (form != null) {
      form.resetForm(this.deptService.formData);
    }
  }


}
