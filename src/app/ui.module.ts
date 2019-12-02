import { NgModule } from '@angular/core';
import { 
    MatButtonModule, MatTableModule, MatIconModule, MatSortModule,MatInputModule,
    MatDialogModule, MatSnackBarModule, MatPaginatorModule, MatNativeDateModule
    
} from '@angular/material';

import {MatDatepickerModule } from '@angular/material/datepicker';

const UI = [
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule
];

@NgModule({
    imports: [UI],
    exports:[UI]
    
  })
  export class UiModule { }