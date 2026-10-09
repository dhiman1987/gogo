import TodoDayGroup from '../TodoDayGroup/TodoDayGroup'
import type { DateOnly } from '../../models/DateOnly'
import type { Todo } from '../../models/Todo'
import './TodoList.css'

export type TodoGroup = {
  date: DateOnly
  isToday: boolean
  todos: Todo[]
}

type TodoListProps = {
  groups: TodoGroup[]
  today: DateOnly
}

function TodoList({ groups, today }: TodoListProps) {
  return (
    <div className="todoList">
      {groups.map((group) => (
        <TodoDayGroup group={group} today={today} key={group.date} />
      ))}
    </div>
  )
}

export default TodoList
