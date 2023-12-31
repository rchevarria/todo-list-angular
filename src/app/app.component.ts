import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-list';  //one way data binding with HTML
  tasks: Task[] = [
    new Task("Visit Ann"),
    new Task("Call Dad"),
    new Task("Go to the gym"),
    new Task("Wash the dishes"),
    new Task("Shop for the party")
  ];

  add(newTask: string){
    this.tasks.push(new Task(newTask));
  }

  remove(existingTask: Task){
    var userConfirmed = confirm(`Are you sure that you want to remove the following task? \n "${existingTask}"`)
    if(userConfirmed){
      this.tasks = this.tasks.filter(task => task != existingTask)
    }
  }

  markAsDone(task: Task){
    task.isDone = true;
  }
}

class Task{
  constructor(public title: string){

  }
  public isDone = false;
}
