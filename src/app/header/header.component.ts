import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Todo} from "../shared/todo/todo.model";
import {Subscription} from "rxjs";
import {TodoService} from "../shared/todo/todo.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() todos: Todo[];
  subscription: Subscription;
  todosFinished: number = 0;
  todosUnfinished: number = 0;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todosFinished = this.todos.filter(x => x.complete === true).length;
    this.todosUnfinished = this.todos.filter(x => x.complete === false).length;
    this.subscription = this.todoService.todosChanged.subscribe(
        (todos: Todo[]) => {
          this.todosFinished = todos.filter(x => x.complete === true).length;
          this.todosUnfinished = todos.filter(x => x.complete === false).length;
        }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
