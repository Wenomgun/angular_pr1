import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./_pages/list-tasks/list-tasks.module').then((m) => m.ListTasksModule)
  },
  {
    path: 'important-tasks',
    loadChildren: () => import('./_pages/important-tasks/important-tasks.module').then((m) => m.ImportantTasksModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
