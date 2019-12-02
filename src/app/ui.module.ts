import { NgModule } from '@angular/core';
import { 
    MatButtonModule, MatTableModule, MatIconModule, MatSortModule,MatInputModule,
    MatDialogModule, MatSnackBarModule, MatPaginatorModule 
} from '@angular/material';

const UI = [
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    MatPaginatorModule
];

@NgModule({
    imports: [UI],
    exports:[UI]
    
  })
  export class UiModule { }