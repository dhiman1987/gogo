import type { DateOnly } from '../../models/DateOnly'
import type { Todo } from '../../models/Todo'
import { getTodos } from '../../services/todoService'
import TodoInput from '../TodoInput/TodoInput'
import TodoList, { type TodoGroup } from '../TodoList/TodoList'
import './MainContent.css'

function getTodayDate(): DateOnly {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function groupTodosByPlannedDate(
  todos: Todo[],
  today: DateOnly,
): TodoGroup[] {
  const groups = new Map<DateOnly, TodoGroup>()

  for (const todo of todos) {
    const group = groups.get(todo.plannedDate)
    if (group) {
      group.todos.push(todo)
    } else {
      groups.set(todo.plannedDate, {
        date: todo.plannedDate,
        isToday: todo.plannedDate === today,
        todos: [todo],
      })
    }
  }

  return [...groups.values()].sort((left, right) =>
    left.date.localeCompare(right.date),
  )
}

function MainContent() {
  const today = getTodayDate()
  const todoGroups = groupTodosByPlannedDate(getTodos(), today)

  return (
    <main id="main-content">
      <TodoList groups={todoGroups} today={today} />
      <TodoInput />
    </main>
  )
}

export default MainContent
