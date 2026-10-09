import TodoRow from '../TodoRow/TodoRow'
import type { DateOnly } from '../../models/DateOnly'
import type { TodoGroup } from '../TodoList/TodoList'
import './TodoDayGroup.css'

type TodoDayGroupProps = {
  group: TodoGroup
  today: DateOnly
}

function TodoDayGroup({ group, today }: TodoDayGroupProps) {
  const formattedDate = `${group.date.slice(8, 10)}/${group.date.slice(5, 7)}`

  return (
    <section
      className={group.isToday ? 'currentDayGroup' : 'dayGroup'}
      aria-label={group.isToday ? `${formattedDate}, today` : formattedDate}
    >
      <h3 className={group.isToday ? undefined : 'day'}>
        {formattedDate}
        {group.isToday && (
          <>
            {' '}
            <span className="todayBadge">TODAY</span>
          </>
        )}
      </h3>
      {group.todos.map((todo) => (
        <TodoRow
          groupIsToday={group.isToday}
          todo={todo}
          today={today}
          key={todo.id}
        />
      ))}
    </section>
  )
}

export default TodoDayGroup
