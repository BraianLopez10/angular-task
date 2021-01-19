import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskService } from 'src/app/core/services/task.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  formulario: FormGroup

  @Output() eventAddTask = new EventEmitter()

  constructor(private formBuilder: FormBuilder, private taskService: TaskService, private router: Router) {
    this.formBuil()
  }
  formBuil() {
    this.formulario = this.formBuilder.group({
      content: ['', [Validators.required ,Validators.maxLength(120)]],
      title: ['', [Validators.required , Validators.maxLength(10)]]
    })
  }
  submit(e: Event) {
    e.preventDefault()
    if (this.formulario.valid) {
      this.taskService.create(this.formulario.value).subscribe((t) => {
        this.eventAddTask.emit(t)
        this.formulario.reset('')
      })
    }
  }

  ngOnInit(): void {
  }

}
