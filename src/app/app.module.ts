import { appReducers } from './store/reducers/app.redusers';
import { CookieService } from 'ngx-cookie-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { ToDoListComponent } from './components/todos/to-do-list/to-do-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from './store/effects/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { AuthService } from './services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { TodosComponent } from './components/todos/todos.component';
import { ToDoComponent } from './components/todos/to-do-list/to-do/to-do.component';
import { NewTodoComponent } from './components/todos/to-do-list/new-todo/new-todo.component';

 
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
    EffectsModule.forRoot([AuthEffects]),
  ],
  providers: [CookieService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

