import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [MatToolbarModule, MatSlideToggleModule, MatIconModule, MatInputModule],
  exports: [MatToolbarModule, MatSlideToggleModule, MatIconModule, MatInputModule],
})
export class MaterialModule {}
