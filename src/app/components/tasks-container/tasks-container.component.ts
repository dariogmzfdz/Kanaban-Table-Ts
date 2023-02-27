import { Component, OnInit, Input } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { BoardComponent } from '../board/board.component';

@Component({
  selector: 'app-tasks-container',
  templateUrl: './tasks-container.component.html',
  styleUrls: ['./tasks-container.component.scss'],
})
export class TasksContainerComponent implements OnInit {
  constructor(private parent: BoardComponent) {}

  todo: any = [];

  progress: any = [];

  toBeTested: any = [];

  done: any = [];

  ngOnInit(): void {}

  addTask() {
    this.parent.addTask(event);
  }

  deleteTask(event: any) {
    const task = event.target.parentElement.parentElement.parentElement;

    task.remove();
  }

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
