import TodoDayGroup from '../TodoDayGroup/TodoDayGroup'
import './TodoList.css'

export type Todo = {
  title: string
  completed: boolean
  badge?: string
  badgeType?: 'reschedule' | 'overdue'
}

export type TodoGroup = {
  date: string
  isToday: boolean
  todos: Todo[]
}

type TodoListProps = {
  groups: TodoGroup[]
}

function TodoList({ groups }: TodoListProps) {
  return (
    <div className="todoList">
      {groups.map((group) => (
        <TodoDayGroup group={group} key={group.date} />
      ))}
    </div>
  )
}

export default TodoList
