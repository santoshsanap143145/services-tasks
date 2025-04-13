import { Component, OnInit } from '@angular/core';
import { Itodo } from 'src/app/models/todo';

@Component({
  selector: 'app-todos-dashboard',
  templateUrl: './todos-dashboard.component.html',
  styleUrls: ['./todos-dashboard.component.scss'],
})
export class TodosDashboardComponent implements OnInit {
  editTodo!: Itodo;
  constructor() {}

  ngOnInit(): void {}

  editTodoObj(editTodo: Itodo) {
    this.editTodo = editTodo;
  }
}
