import {Component, OnInit, OnDestroy} from '@angular/core';
import {TodoService} from "./shared/todo/todo.service";
import {Todo} from "./shared/todo/todo.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'app';
  todoList: Todo[];

  constructor(private todoService: TodoService){}

  ngOnInit(){
    this.todoList = this.todoService.getTodos();
  }
  ngOnDestroy(){

  }
}
