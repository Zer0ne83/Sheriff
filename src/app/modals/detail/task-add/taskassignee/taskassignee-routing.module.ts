import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskAssigneePage } from './taskassignee.page';
const routes: Routes = [
  {
    path: '',
    component: TaskAssigneePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskAssigneePageRoutingModule {}
