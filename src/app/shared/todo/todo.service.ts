import {Todo} from "./todo.model";
import {Subject} from "rxjs";

export class TodoService {
    todosChanged = new Subject<Todo[]>();

    //initial array
    private todos: Todo[] = [
        new Todo(1, 'Task 1', true),
        new Todo(2, 'Task 2', false)
    ];

    //get all todos copy of original array
    getTodos(){
        return this.todos.slice();
    }

    updateTodo(todoId: number){

        const tIndex = this.todos.findIndex(t => t.id === todoId);
        if(tIndex === undefined)
            return false;
        let refTodo = this.todos[tIndex];
        this.todos[tIndex] = new Todo(refTodo.id, refTodo.title, !refTodo.complete);
        this.todosChanged.next(this.todos.slice());
        return true;
    }
}