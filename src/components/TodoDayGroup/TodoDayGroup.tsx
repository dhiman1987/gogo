import TodoRow from '../TodoRow/TodoRow'
import type { TodoGroup } from '../TodoList/TodoList'
import './TodoDayGroup.css'

type TodoDayGroupProps = {
  group: TodoGroup
}

function TodoDayGroup({ group }: TodoDayGroupProps) {
  return (
    <section
      className={group.isToday ? 'currentDayGroup' : 'dayGroup'}
      aria-label={group.isToday ? `${group.date}, today` : group.date}
    >
      <h3 className={group.isToday ? undefined : 'day'}>
        {group.date}
        {group.isToday && (
          <>
            {' '}
            <span className="todayBadge">TODAY</span>
          </>
        )}
      </h3>
      {group.todos.map((todo, index) => (
        <TodoRow
          groupIsToday={group.isToday}
          todo={todo}
          key={`${todo.title}-${index}`}
        />
      ))}
    </section>
  )
}

export default TodoDayGroup
