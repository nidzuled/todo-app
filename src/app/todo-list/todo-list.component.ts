import {Component, OnInit, Input} from '@angular/core';
import {Todo} from "../shared/todo/todo.model";
import {FormGroup, Validators, FormControl, FormGroupDirective} from "@angular/forms";
import {TodoService} from "../shared/todo/todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[];
  todoNewForm: FormGroup;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoNewForm = new FormGroup({
      'title': new FormControl(null, [Validators.required, this.uniqueTitle.bind(this)]),
    });
  }

  onAddItem(formDirective: FormGroupDirective){
    if(!this.todoNewForm.valid)
      return;
    const value = this.todoNewForm.value;
    const newTodo = new Todo(this.todoService.autoIncrementId(), value.title, false);
    this.todoService.addTodo(newTodo);
    this.todoNewForm.reset();
    formDirective.resetForm();
  }

  uniqueTitle(control: FormControl): {[s: string]: boolean} {
    if (this.todoService.isNotUniqueTitle(control.value)) {
      return {'titleNotUnique': true};
    }
    return null;
  }

}
