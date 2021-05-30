import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportantTasksComponent } from './important-tasks.component';
import {ImportantTasksRoutingModule} from "./important-tasks-routing.module";



@NgModule({
  declarations: [
    ImportantTasksComponent
  ],
  imports: [
    CommonModule,
    ImportantTasksRoutingModule
  ]
})
export class ImportantTasksModule { }
