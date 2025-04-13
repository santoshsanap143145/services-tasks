import { Injectable } from '@angular/core';
import { Itodo } from '../models/todo';
import { SnackBarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoArr: Array<Itodo> = [
    {
      todoItem: 'HTML',
      todoId: '101',
    },
    {
      todoItem: 'CSS',
      todoId: '102',
    },
    {
      todoItem: 'JS',
      todoId: '103',
    },
    {
      todoItem: 'SASS',
      todoId: '104',
    },
  ];

  constructor(
      private _snackbar: SnackBarService
    ) {}
  
    fetchAllTodos() {
      return this.todoArr.reverse();
    }
  
    createNewTodo(newtodo: Itodo) {
      this.todoArr.unshift(newtodo);
      this._snackbar.notification(
        `New Todo '${newtodo.todoItem}' is created successfully !!!`
      );
    }
  
    updateTodo(updatedTodo: Itodo) {
      let getIndex = this.todoArr.findIndex(
        (std) => std.todoId === updatedTodo.todoId
      );
      this.todoArr[getIndex] = updatedTodo;
      this._snackbar.notification(
        `The Todo Item is updated to '${updatedTodo.todoItem}' successfully !!!`
      );
    }
  
    removeTodo(id: string) {
      let getIndex = this.todoArr.findIndex((todo) => todo.todoId === id)!;
      let removedTodo = this.todoArr[getIndex].todoItem;
      this.todoArr.splice(getIndex, 1);
      this._snackbar.notification(
        `The Student '${removedTodo}' is removed successfully !!!`
      );
    }
}
