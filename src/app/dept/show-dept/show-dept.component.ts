import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog, MatDialogConfig} from '@angular/material';

import { DeptService } from 'src/app/services/dept.service';
import { DeptEntity } from 'src/app/entities/dept.entity';
import { AddDeptComponent } from 'src/app/dept/add-dept/add-dept.component';

@Component({
  selector: 'app-show-dept',
  templateUrl: './show-dept.component.html',
  styleUrls: ['./show-dept.component.css']
})
export class ShowDeptComponent implements OnInit {

  dataSourceDept: MatTableDataSource<any>;
  displayedColumns = ['options', 'deptId', 'deptName'];
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private deptService: DeptService,
              private dialog:MatDialog) { }

  

  ngOnInit() {
    this.findAllDept();

  }

  findAllDept() {
    this.deptService.findAllDept().subscribe(dept => {
      this.dataSourceDept = new MatTableDataSource(dept);
      this.dataSourceDept.sort = this.sort;
    });
  }

  onAdd(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose =true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(AddDeptComponent, dialogConfig);

  }
  onEdit(dept:DeptEntity){
    return alert(JSON.stringify(dept));
  }

  onDelete(deptId:number){
    return alert(JSON.stringify(deptId));
  }

  applyFilter(event:any){
    let filterValue = event.target.value;
    this.dataSourceDept.filter = filterValue.trim().toLocaleLowerCase();
  }
}
