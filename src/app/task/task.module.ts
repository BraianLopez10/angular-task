import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskComponent } from './components/task/task.component';
import { MaterialModule } from '../material/material.module';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskEditComponent } from './components/task-edit/task-edit.component';


@NgModule({
  declarations: [TasksComponent, TaskComponent, TaskFormComponent, TaskEditComponent],
  imports: [
    MaterialModule,
    CommonModule,
    TaskRoutingModule,
    ReactiveFormsModule
  ]
})
export class TaskModule { }
