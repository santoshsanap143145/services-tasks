import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Itodo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoArr : Array<Itodo> = []

  @Output() emitTodoObj: EventEmitter<Itodo> = new EventEmitter<Itodo>()
  constructor(private _todoService: TodoService) { }

  ngOnInit(): void {
    this.todoArr = this._todoService.fetchAllTodos()
  }


  editOnClick(todoObj: Itodo){
    this.emitTodoObj.emit(todoObj)
  }

  removeOnClick(todoId: string){
    let confirmed = window.confirm(`Are you sure, you want to delete this Todo?`)
    if(confirmed){
      this._todoService.removeTodo(todoId)
    }
  }

}
