import { Component, OnInit } from '@angular/core';
import {ITask, TasksService} from "../shared/tasks.service";

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.less']
})
export class TaskFormComponent implements OnInit {

  public title: string = '';

  constructor(public tasksService: TasksService) { }

  ngOnInit(): void {
  }

  onAddTask(): void {
    const task: ITask = {
      title: this.title,
      id: Date.now(),
      completed: false,
      date: new Date()
    }
    this.tasksService.onAddTask(task);
    this.title = '';
  }

}
