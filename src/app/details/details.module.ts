import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgReduxModule } from '@angular-redux/store';
import { DetailsPageComponent } from './details-page/details-page.component';

@NgModule({
  imports: [
    CommonModule,
    NgReduxModule
  ],
  declarations: [DetailsPageComponent],
  exports: [DetailsPageComponent]
})
export class DetailsModule { }
