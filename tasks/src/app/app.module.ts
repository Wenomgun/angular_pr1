import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksComponent } from './_pages/tasks/tasks.component';
import {HttpClientModule} from "@angular/common/http";
import { TaskFormComponent } from './_pages/task-form/task-form.component';
import {FormsModule} from "@angular/forms";
import {TasksFilterPipe} from "./shared/tasks-filter.pipe";
import {AppRoutingModule} from "./app-routing.module";
import { ListTasksComponent } from './_pages/list-tasks/list-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskFormComponent,
    TasksFilterPipe,
    ListTasksComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
