import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { UuidService } from 'src/app/services/uuid.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit, OnChanges {
  @ViewChild('todoForm') todoForm!: NgForm;

  editMode: boolean = false;
  @Input() TodoToBeEdited!: Itodo;
  constructor(
    private _uuidService: UuidService,
    private _todoService: TodoService
  ) {}

  ngOnInit(): void {}

  submitOnClick() {
    if (this.todoForm.valid) {
      let newTodo: Itodo = this.todoForm.value;
      newTodo.todoId = this._uuidService.uuid();
      this._todoService.createNewTodo(newTodo);
      this.todoForm.resetForm();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['TodoToBeEdited']){
      setTimeout(() => {
        if(this.todoForm && this.TodoToBeEdited){
          this.todoForm.setValue({
            todoItem: this.TodoToBeEdited.todoItem
          })
          this.editMode = true
        }
      }, 50);
    }
  }

  updateOnClick() {
    let updatedTodo = this.todoForm.value;
    updatedTodo.todoId = this.TodoToBeEdited.todoId
    this._todoService.updateTodo(updatedTodo)
    this.todoForm.resetForm()
  }
}
