import { Component, Input, OnInit, Output } from '@angular/core';
import {FormGroup , FormBuilder , Validators} from '@angular/forms'
import { EventEmitter } from 'events';
import { TaskService } from 'src/app/core/services/task.service';
import { Task } from 'src/app/task.model';
@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {

  Formulario : FormGroup
  @Input() task : Task
  @Output() eventCloseEdit = new EventEmitter()
  stateEdit : boolean
  constructor(private formBuilder : FormBuilder , private taskService : TaskService) {
    this.stateEdit = true
  }

  builForm () {
    this.Formulario = this.formBuilder.group({
      content: [this.task.content || '', [Validators.required ,Validators.maxLength(140)]],
      title: [this.task.title || '', [Validators.required ,Validators.maxLength(10)]],

    })
  }

  ngOnInit(): void {
    this.builForm()
  }
  close () {
    this.stateEdit = false
  }
  save (event :Event) {
    event.preventDefault()
    if ( this.Formulario.valid ) {
      this.taskService.update(this.Formulario.value , this.task._id).subscribe(v => {
        if (v.data.n > 0 ) {
          this.task.content = this.Formulario.get('content').value;
          this.task.title = this.Formulario.get('title').value;
          this.stateEdit = false;
        }
      })
    }
  }

}
