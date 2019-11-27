import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

const ui = [
    MatButtonModule
];

@NgModule({
    imports: [ui],
    exports:[ui]
    
  })
  export class UiModule { }