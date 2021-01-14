import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/task.model';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { TaskService } from 'src/app/core/services/task.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task
  @Output() delete = new EventEmitter<string>()
  message: string
  constructor(private taskService: TaskService) {
  }
  ngOnInit(): void {
    this.message = this.task.done ? 'Cambiar a Proceso' : 'Cambiar a terminada'
  }

  event(event: MatSlideToggleChange) {
    if (event.checked) {
      this.message = "Cambiar a Proceso"
    } else {
      this.message = "Cambar a terminada "
    }
    const taskUpdate = {
      title: this.task.title || '',
      content: this.task.content,
      done: event.checked
    }
    this.taskService.update(taskUpdate, this.task._id).subscribe(v => {
      if (v.data.n > 0) {
        this.task.done = event.checked
      }
    })
  }

  clickDelete() {
    this.taskService.delete(this.task._id).subscribe(() => {
      this.delete.emit(this.task._id)
    })
  }
}
