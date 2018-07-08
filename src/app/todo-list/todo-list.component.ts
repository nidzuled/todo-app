import {Component, OnInit, Input} from '@angular/core';
import {Todo} from "../shared/todo/todo.model";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[];
  constructor() { }

  ngOnInit() {
  }

}
