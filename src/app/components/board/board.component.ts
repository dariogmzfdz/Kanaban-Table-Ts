import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TasksContainerComponent } from '../tasks-container/tasks-container.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  @ViewChild(TasksContainerComponent) child: any;

  taskName: FormControl = new FormControl();
  taskEst: FormControl = new FormControl();

  constructor() {}

  ngOnInit(): void {}

  public showTaskForm() {
    const taskForm = document.getElementById('taskForm');

    taskForm?.classList.toggle('display-none');
  }

  public addTask(event: any) {
    const taskForm: any = document.getElementById('taskForm');
    const snack: any = document.getElementById('snackbar');
    if (this.taskName.value === null) {
      snack.className = 'show';
      setTimeout(function () {
        snack.className = snack.className.replace('show', '');
      }, 3000);
      return;
    } else {
      const newTask = {
        name: this.taskName.value,
        est: this.taskEst.value,
      };

      if (event.target.id == 'todoButton') {
        this.child.todo.push(newTask);
      } else if (event.target.id == 'progressButton') {
        this.child.progress.push(newTask);
      } else if (event.target.id == 'testedButton') {
        this.child.toBeTested.push(newTask);
      } else if (event.target.id == 'doneButton') {
        this.child.done.push(newTask);
      }
      console.log(this.child.progress);
    }

    this.taskName.setValue('');
    this.taskEst.setValue('');

    taskForm.classList.toggle('display-none');
  }
}
