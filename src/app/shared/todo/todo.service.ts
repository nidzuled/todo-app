import {Todo} from "./todo.model";

export class TodoService {
    //initial array
    private todos: Todo[] = [
        new Todo(1, 'Task 1', true),
        new Todo(2, 'Task 2', false)
    ];

    //get all todos copy of array
    getTodos(){
        return this.todos.slice();
    }
}