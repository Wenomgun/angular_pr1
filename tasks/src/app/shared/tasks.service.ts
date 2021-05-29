import {Injectable} from "@angular/core";
import {retry} from "rxjs/operators";

export interface ITask {
  id: number;
  title: string;
  completed: boolean;
  date?: any;
}

@Injectable({providedIn: 'root'})
export class TasksService {
  public tasks: ITask[] = [
    {id: 1, title: 'Задание 1', completed: false, date: new Date()},
    {id: 2, title: 'Задание 2', completed: true, date: new Date()},
    {id: 3, title: 'Задание 3', completed: false, date: new Date()}
  ];

  onToggleTask(id: number): void {
    const idTask = this.tasks.findIndex((t) => t.id === id );
    this.tasks[idTask].completed = !this.tasks[idTask].completed;
  }

  onRemoveTask(id: number): void {
    this.tasks = this.tasks.filter((t) => t.id !== id );
  }
}
