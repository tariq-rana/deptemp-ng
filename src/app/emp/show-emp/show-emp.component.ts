import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog, MatDialogConfig, MatSnackBar, MatPaginator } from '@angular/material';

import { EmpService } from 'src/app/services/emp.service';
import { EmpEntity } from 'src/app/entities/emp.entity';
import { AddEmpComponent } from '../add-emp/add-emp.component';
import { EditEmpComponent } from '../edit-emp/edit-emp.component';
import { EmpRO } from 'src/app/entities/emp.ro';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  dataSourceEmp: MatTableDataSource<any>;
  displayedColumns = ['options', 'empId', 'empName', 'mailId',  'deptName', 'joinDate'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;



  constructor(private readonly empService: EmpService, 
    private dialog: MatDialog,
    private snackBar: MatSnackBar) {
    this.empService.listen().subscribe((m: any) => {
      this.findAllEmp();
    })
  }

  ngOnInit() {
    this.findAllEmp();

  }
  findAllEmp() {
    this.empService.findAllEmp().subscribe(emp => {
      let allEmp: EmpRO[] = [];
     
      allEmp = emp.map((e: EmpEntity) => {
        return {
          empId: e.empId, empName: e.empName, mailId: e.mailId,
          joinDate: e.joinDate, deptId: e.dept.deptId, deptName: e.dept.deptName
        };
      });

      this.dataSourceEmp = new MatTableDataSource(allEmp);
      this.dataSourceEmp.sort = this.sort;
    });
  }


  onAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(AddEmpComponent, dialogConfig);
  }

  onEdit(emp: EmpRO) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.empService.formData = emp;

    this.dialog.open(EditEmpComponent, dialogConfig);

  }

  onDelete(empId: number) {
    if (confirm('Are you sure ?')) {
      this.empService.deleteEmp(empId).subscribe(emp => {
        if (emp.emptId == empId) {
          this.snackBar.open('Deleted', 'Dismiss', { duration: 3000, verticalPosition: 'top' })
          this.findAllEmp();
        }
      });
    }

  }

  applyFilter(event: any) {
    let filterValue = event.target.value;
    this.dataSourceEmp.filter = filterValue.trim().toLocaleLowerCase();
  }
}
