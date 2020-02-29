import { LoginComponent } from './components/login/login.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LogoutGuard } from './guards/logout.guard';
import { PageGuard } from './guards/page.guard';


const routes: Routes = [
  { path: 'home', component: ToDoListComponent, canActivate: [PageGuard]},
  { path: 'login', component: LoginComponent, canActivate: [LogoutGuard]},
  { path: 'registration', component: RegisterComponent, canActivate: [LogoutGuard]},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent, canActivate: [PageGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [PageGuard, LogoutGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
