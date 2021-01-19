import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/core/services/task.service';
import { Task, response } from 'src/app/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(private taskService: TaskService) { }
  tasks: Task[] = []
  mostrarForm: boolean = false

  ngOnInit(): void {
    this.taskService.getAll()
      .subscribe((tasks) => {
        this.tasks = tasks.data
      })
  }
  deleteTask(event) {
    this.tasks = this.tasks.filter((t) => t._id !== event)
  }
  addTask (data) {
    this.tasks.push(data.data)
  }
  mostrarFormulario() {
    this.mostrarForm = !this.mostrarForm
  }
}
