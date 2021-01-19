import { Injectable } from '@angular/core';
import { Task } from '../../task.model'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private httpClient: HttpClient) { }
  getAll() {
    const tasks = this.httpClient.get<any>(`${environment.URI}/task`)
    return tasks;
  }
  update(taskUpdate: Partial<Task>, id: string) {
    const toSend = {
      newTask: {
        ...taskUpdate
      },
      id: id
    }
    const resp = this.httpClient.put<any>(`${environment.URI}/task`, toSend)
    return resp
  }
  delete(id: string) {
    return this.httpClient.delete<any>(`${environment.URI}/task/${id}`)
  }
  create(task) {
    const newTask = this.httpClient.post(`${environment.URI}/task`, task)
    return newTask
  }
}
