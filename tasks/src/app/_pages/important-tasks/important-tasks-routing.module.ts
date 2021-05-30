import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ImportantTasksComponent} from "./important-tasks.component";

const routes: Routes = [
  {
    path: '',
    component: ImportantTasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportantTasksRoutingModule {}
