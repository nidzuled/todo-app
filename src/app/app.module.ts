import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';
import {
    MatToolbarModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatCardModule,
    MatChipsModule, MatListModule, MatFormFieldModule, MatInputModule
} from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TodoService} from "./shared/todo/todo.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatChipsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
