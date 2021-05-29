import {Component, OnInit} from '@angular/core';
import {TasksService} from "../shared/tasks.service";
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.less']
})
export class TasksComponent implements OnInit {

  constructor(public tasksService: TasksService) { }

  ngOnInit(): void {
  }

  onChanged(id: number): void {
    this.tasksService.onToggleTask(id);
  }

  onRemove(id: number): void {
    this.tasksService.onRemoveTask(id);
  }

}
