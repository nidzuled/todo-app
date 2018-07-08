import {Todo} from "./todo.model";
import {Subject} from "rxjs";

export class TodoService {
    todosChanged = new Subject<Todo[]>();

    //initial array
    private todos: Todo[] = [

    ];

    //get all todos copy of original array
    getTodos(){
        return this.todos.slice();
    }

    addTodo(todo: Todo){
        this.todos.push(todo);
        this.todosChanged.next(this.todos.slice());
    }
    //Adding random todo
    addRandomTodo(){

        let randomTitle = 'Task '+Math.floor((Math.random() * 1000) + 1); //generating random title

        //check if task is added
        if(this.isNotUniqueTitle(randomTitle))
            return false;
        let todo = new Todo(this.autoIncrementId(), randomTitle, false);
        this.todos.push(todo);
        this.todosChanged.next(this.todos.slice());
        return true;
    }

    updateTodo(todoId: number){

        const tIndex = this.todos.findIndex(t => t.id === todoId); // find index of passed id
        //check if exists
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