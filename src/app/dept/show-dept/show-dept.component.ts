import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog, MatDialogConfig, MatSnackBar, MatPaginator } from '@angular/material';

import { DeptService } from 'src/app/services/dept.service';
import { DeptEntity } from 'src/app/entities/dept.entity';
import { AddDeptComponent } from 'src/app/dept/add-dept/add-dept.component';
import { EditDeptComponent } from '../edit-dept/edit-dept.component';

@Component({
  selector: 'app-show-dept',
  templateUrl: './show-dept.component.html',
  styleUrls: ['./show-dept.component.css']
})
export class ShowDeptComponent implements OnInit {

  dataSourceDept: MatTableDataSource<any>;
  displayedColumns = ['options', 'deptId', 'deptName'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private deptService: DeptService, private dialog: MatDialog,
    private snackBar: MatSnackBar) {

    this.deptService.listen().subscribe((m: any) => {
      this.findAllDept();
    })
  }

  ngOnInit() {
    this.findAllDept();

  }

  findAllDept() {
    this.deptService.findAllDept().subscribe(dept => {
      this.dataSourceDept = new MatTableDataSource(dept);
      this.dataSourceDept.sort = this.sort;
    });
  }

  onAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(AddDeptComponent, dialogConfig);

  }
  onEdit(dept: DeptEntity) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.deptService.formData = dept;
    
    this.dialog.open(EditDeptComponent, dialogConfig);

  }

  onDelete(deptId: number) {
    if (confirm('Are you sure ?')) {
      this.deptService.deleteDept(deptId).subscribe(dept => {
        if (dept.deptId == deptId) {
          this.snackBar.open('Deleted', 'Dismiss', { duration: 3000, verticalPosition: 'top' })
          this.findAllDept();
        }
      });
    }

  }

  applyFilter(event: any) {
    let filterValue = event.target.value;
    this.dataSourceDept.filter = filterValue.trim().toLocaleLowerCase();
  }
}
