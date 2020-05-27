import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClubInfoRoutingModule } from './club-info-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule,
    ClubInfoRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    OwlModule,
  ],
  declarations: [
    AboutComponent
  ]
})
export class ClubInfoModule { }
