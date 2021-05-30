import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ListTasksComponent} from "./list-tasks.component";

const routes: Routes = [
  {
    path: '',
    component: ListTasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListTasksRoutingModule {}
