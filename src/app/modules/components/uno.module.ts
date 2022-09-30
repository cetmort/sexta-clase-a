import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnoComponent } from './uno/uno.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnoRoutingModule } from './uno-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UnoComponent, NotFoundComponent],
  imports: [
    CommonModule,UnoRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class UnoModule { }
