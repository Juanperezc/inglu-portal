import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiabetesRoutingModule } from './diabetes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  imports: [
    CommonModule,
    DiabetesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    OwlModule,
  ],
  declarations: [
    
  ]
})
export class DiabetesModule { }
