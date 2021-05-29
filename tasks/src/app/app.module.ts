import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import {HttpClientModule} from "@angular/common/http";
import { TaskFormComponent } from './task-form/task-form.component';
import {FormsModule} from "@angular/forms";
import {TasksFilterPipe} from "./shared/tasks-filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskFormComponent,
    TasksFilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
