import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  formulario: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.formBuil()
  }
  formBuil() {
    this.formulario = this.formBuilder.group({
      content: [''],
      title: ['']
    })
  }
  submit() {
    // console.log(this.formulario.value)
  }

  ngOnInit(): void {
  }

}
