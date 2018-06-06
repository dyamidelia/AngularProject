import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPageComponent } from './details/details-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DetailsPageComponent],
  exports: [DetailsPageComponent]
})
export class DetailsModule { }
