import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodosDashboardComponent } from './components/todos-dashboard/todos-dashboard.component';
import { StudentsDashboardComponent } from './components/students-dashboard/students-dashboard.component';
import { TodoFormComponent } from './components/todos-dashboard/todo-form/todo-form.component';
import { TodoListComponent } from './components/todos-dashboard/todo-list/todo-list.component';
import { StudentFormComponent } from './components/students-dashboard/student-form/student-form.component';
import { StudentTableComponent } from './components/students-dashboard/student-table/student-table.component';
import { FormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    AppComponent,
    TodosDashboardComponent,
    StudentsDashboardComponent,
    TodoFormComponent,
    TodoListComponent,
    StudentFormComponent,
    StudentTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
