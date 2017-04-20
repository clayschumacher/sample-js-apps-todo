import { Component } from '@angular/core';

export class Task {
  todo: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {

  title: string;
  tasks: Array<Task>;
  todoItem: string;

  constructor() {
    this.title = 'Todo List';
    this.tasks = [
      { 
        todo: 'Get some milk'
      },

      {
        todo: 'Mow the lawn'
      },

      {
        todo: 'Clean the house'
      }
    ];
  }

  addItem(itemToAdd: string) {
     if (itemToAdd) {
      var newItem: Task = {
        todo: itemToAdd
      } 
      this.tasks.push(newItem);
      this.todoItem = "";
    }
  }

  removeItem(itemToRemove: number) {
    this.tasks.splice(itemToRemove, 1);
  }
}
