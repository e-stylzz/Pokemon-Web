import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import {MatIcon, MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [MatToolbarModule, MatSlideToggleModule, MatIconModule],
  exports: [MatToolbarModule, MatSlideToggleModule, MatIconModule],
})
export class MaterialModule {}
