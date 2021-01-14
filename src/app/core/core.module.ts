import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from './services/task.service'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    TaskService
  ]
})
export class CoreModule { }
