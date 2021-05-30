import {Injectable} from "@angular/core";
import {tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface ITask {
  id: number;
  title: string;
  completed: boolean;
  date?: any;
}

@Injectable({providedIn: 'root'})
export class TasksService {
  public tasks: ITask[] = [];

  constructor(private http: HttpClient) {
  }

  fetchTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>('../../assets/tasksData.json')
      .pipe(tap((tasks) => {
        this.tasks = tasks;
      }));
  }

  onToggleTask(id: number): void {
    const idTask = this.tasks.findIndex((t) => t.id === id );
    this.tasks[idTask].completed = !this.tasks[idTask].completed;
  }

  onRemoveTask(id: number): void {
    this.tasks = this.tasks.filter((t) => t.id !== id );
  }

  onAddTask(task: ITask): void {
    this.tasks.push(task);
  }
}
