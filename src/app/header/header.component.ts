import {Component, OnInit, Input} from '@angular/core';
import {Todo} from "../shared/todo/todo.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() todos: Todo[];

  todosFinished: number = 0;
  todosUnfinished: number = 0;

  constructor() { }

  ngOnInit() {
    this.todosFinished = this.todos.filter(x => x.complete === true).length;
    this.todosUnfinished = this.todos.filter(x => x.complete === false).length;
  }

}
