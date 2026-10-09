import type { DateOnly } from './DateOnly'
import { TodoStatus } from './TodoStatus'

export class Todo {
  readonly id: string
  title: string
  status: TodoStatus
  plannedDate: DateOnly
  readonly createdDate: DateOnly
  rescheduleCount: number

  constructor(
    id: string,
    title: string,
    status: TodoStatus,
    plannedDate: DateOnly,
    createdDate: DateOnly,
    rescheduleCount: number,
  ) {
    this.id = id
    this.title = title
    this.status = status
    this.plannedDate = plannedDate
    this.createdDate = createdDate
    this.rescheduleCount = rescheduleCount
  }
}
