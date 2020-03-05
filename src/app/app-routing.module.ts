import { LoginComponent } from './components/login/login.component';
import { ToDoListComponent } from './components/todos/to-do-list/to-do-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LogoutGuard } from './guards/logout.guard';
import { PageGuard } from './guards/page.guard';
import { TodosComponent } from './components/todos/todos.component';

const routes: Routes = [
  { path: 'home', component: TodosComponent, canActivate: [PageGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LogoutGuard] },
  { path: 'registration', component: RegisterComponent, canActivate: [LogoutGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, canActivate: [PageGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [PageGuard, LogoutGuard],
  exports: [RouterModule]
})
export class AppRoutingModule {}
