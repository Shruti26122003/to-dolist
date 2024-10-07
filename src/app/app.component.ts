import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true, // Marks the component as standalone
  imports: [CommonModule, FormsModule], // Direct imports of necessary modules
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Weekly Task';

  todos: Todo[] = [];
  newTodoTitle: string = '';

  // Add a new todo
  addTodo() {
    if (this.newTodoTitle.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        title: this.newTodoTitle,
        completed: false
      };
      this.todos.push(newTodo);
      this.newTodoTitle = ''; // Reset input field
    }
  }

  // Remove a todo by ID
  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
