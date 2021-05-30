import {Component, OnInit} from '@angular/core';
import {TasksService} from "../../shared/tasks.service";
import {delay} from "rxjs/operators";
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.less']
})
export class TasksComponent implements OnInit {
  public isLoading = true;
  public filterText = '';

  constructor(public tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasksService.fetchTasks().pipe(delay(300)).subscribe(() => {
      this.isLoading = false;
    });
  }

  onChanged(id: number): void {
    this.tasksService.onToggleTask(id);
  }

  onRemove(id: number): void {
    this.tasksService.onRemoveTask(id);
  }

}
