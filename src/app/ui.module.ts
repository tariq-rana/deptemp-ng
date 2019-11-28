import { NgModule } from '@angular/core';
import { 
    MatButtonModule, MatTableModule, MatIconModule, MatSortModule,MatInputModule,
    MatDialogModule 
} from '@angular/material';

const ui = [
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatInputModule,
    MatDialogModule
];

@NgModule({
    imports: [ui],
    exports:[ui]
    
  })
  export class UiModule { }