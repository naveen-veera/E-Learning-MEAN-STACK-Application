import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SquadsComponent } from './squads/squads.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { ListUserComponent } from './list-user/list-user.component'


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'squads', component: SquadsComponent },
  { path:  'users',
      component:  UsersComponent,
      children: [
      {
      path:  '',
      component:  ListUserComponent
      },
      {
      path:  'add',
      component:  AddUserComponent
      },
      {
      path:  'update',
      component:  UpdateUserComponent
      },
      {
      path:  'delete',
      component:  DeleteUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
