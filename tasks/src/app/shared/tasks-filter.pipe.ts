import {Pipe, PipeTransform} from "@angular/core";
import {ITask} from "./tasks.service";

@Pipe({
  name: 'taskFilter'
})
export class TasksFilterPipe implements PipeTransform{
  transform(tasks: ITask[], filterText: string): ITask[] {
    if (!filterText.trim()) {
      return tasks;
    }

    return tasks.filter((task) => {
      return task.title.toLowerCase().indexOf(filterText.toLowerCase()) !== -1;
    })
  }

}
