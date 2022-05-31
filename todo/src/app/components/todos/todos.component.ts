import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todos:Todo[] | undefined;
inputTodo: string = '';
  constructor() { }

  ngOnInit(): void {
    this.todos = []
  }

toggleDone(id: number) {
  this.todos?.map((element, index) => {
    if(index == id) {
      element.completed = !element.completed;
    }
    return element;
  })
}
deleteTodo(id:number) {
  this.todos = this.todos?.filter((value,index) => index != id)
}
addTodo() {
  this.todos?.push({
    content: this.inputTodo,
    completed: false,
  })
  this.inputTodo = '';
}

}
