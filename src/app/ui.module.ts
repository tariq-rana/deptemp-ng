import { NgModule } from '@angular/core';
import { 
    MatButtonModule, MatTableModule, MatIconModule, MatSortModule,MatInputModule,
    MatDialogModule, MatSnackBarModule 
} from '@angular/material';

const UI = [
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule
];

@NgModule({
    imports: [UI],
    exports:[UI]
    
  })
  export class UiModule { }