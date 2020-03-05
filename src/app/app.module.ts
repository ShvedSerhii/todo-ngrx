import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CookieService } from 'ngx-cookie-service';
import { appReducers } from './store/reducers/app.redusers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { ToDoListComponent } from './components/todos/to-do-list/to-do-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthEffects } from './store/effects/auth.effects';
import { AuthService } from './services/auth/auth.service';
import { TodosComponent } from './components/todos/todos.component';
import { ToDoComponent } from './components/todos/to-do-list/to-do/to-do.component';
import { NewTodoComponent } from './components/todos/to-do-list/new-todo/new-todo.component';
import { TodosService } from './services/todos/todos.service';
import { TodosEffects } from './store/effects/todos.effects';
import { LogInterceptor } from './interceptors/log.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    ToDoListComponent,
    ToDoComponent,
    NotFoundComponent,
    TodosComponent,
    NewTodoComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatListModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot(appReducers, {}),
    EffectsModule.forRoot([AuthEffects, TodosEffects])
  ],
  providers: [
    CookieService,
    AuthService,
    TodosService,
    { provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
