import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-dept',
  templateUrl: './add-dept.component.html',
  styleUrls: ['./add-dept.component.css']
})
export class AddDeptComponent implements OnInit {

  constructor(private dialogBox:MatDialogRef<AddDeptComponent>) { }

  ngOnInit() {
  }
  
  onClose(){
      this.dialogBox.close();
  }
}
