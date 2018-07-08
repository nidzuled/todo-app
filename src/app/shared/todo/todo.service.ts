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

    addTodo(todo: Todo){
        this.todos.push(todo);
        this.todosChanged.next(this.todos.slice());
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

    autoIncrementId(){
        return this.todos.length+1;
    }

    isNotUniqueTitle(title: string){

        return this.todos.find(x => x.title === title) !== undefined
    }

}