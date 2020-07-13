import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { UsersComponent } from './users/users.component';
import { SquadsComponent } from './squads/squads.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserServiceService } from './shared/user-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SquadService } from './shared/squad.service';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    UsersComponent,
    SquadsComponent,
    DashboardComponent,
    UserNavbarComponent,
    AddUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    ListUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [
    UserServiceService,
    SquadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
