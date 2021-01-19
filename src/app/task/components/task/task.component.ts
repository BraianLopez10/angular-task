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
  @Output() onDelete = new EventEmitter()
  stateEdit : boolean
  constructor(private taskService: TaskService) {
  }
  ngOnInit(): void {  }

  changeStatus() {
    const taskUpdate = {
      title: this.task.title || '',
      content: this.task.content,
      done:!this.task.done
    }
    this.taskService.update(taskUpdate, this.task._id).subscribe(v => {
      if (v.data.n > 0) {
        this.task.done = !this.task.done
      } 
    })
  }

  delete() {
    this.taskService.delete(this.task._id).subscribe((e)=>{
      this.onDelete.emit(this.task._id)
    })
  }

  cancelEdit (event:Event) {
    console.log("cancel")
    this.stateEdit = false
  }
  changeEdit () {
    this.stateEdit = !this.stateEdit
  }
}
