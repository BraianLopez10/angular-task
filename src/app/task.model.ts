export interface Task {
  _id: string,
  title: string,
  content: string,
  done: boolean,
  createdAt: Date,
  updatedAt: Date,
  __v: number
}

export interface response {
  data: {
    _id: string,
    content: string,
    created_at: string,
    done: boolean,
    title: string,
    createdAt: Date,
    updatedAt: Date,
    __v: number
  }
}