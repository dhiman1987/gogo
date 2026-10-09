import todosData from '../data/data.json'
import { Todo } from '../models/Todo'
import type { DateOnly } from '../models/DateOnly'
import { TodoStatus } from '../models/TodoStatus'

type TodoData = {
  id: string
  title: string
  status: string
  plannedDate: DateOnly
  createdDate: DateOnly
  rescheduleCount: number
}

const todoRecords: TodoData[] = todosData

function parseTodoStatus(status: string): TodoStatus {
  switch (status) {
    case TodoStatus.Todo:
    case TodoStatus.Done:
    case TodoStatus.Cancelled:
      return status
    default:
      throw new Error(`Unknown todo status: ${status}`)
  }
}

export function getTodos(): Todo[] {
  return todoRecords.map(
    ({ id, title, status, plannedDate, createdDate, rescheduleCount }) =>
      new Todo(
        id,
        title,
        parseTodoStatus(status),
        plannedDate,
        createdDate,
        rescheduleCount,
      ),
  )
}
