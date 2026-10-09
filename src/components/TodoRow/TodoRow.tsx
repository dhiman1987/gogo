import type { DateOnly } from '../../models/DateOnly'
import type { Todo } from '../../models/Todo'
import { TodoStatus } from '../../models/TodoStatus'
import './TodoRow.css'

type TodoRowProps = {
  todo: Todo
  groupIsToday: boolean
  today: DateOnly
}

function TodoRow({ todo, groupIsToday, today }: TodoRowProps) {
  const isOverdue =
    todo.status === TodoStatus.Todo && todo.plannedDate < today

  return (
    <article
      className={`todoCard${todo.status === TodoStatus.Done ? ' isDone' : ''}`}
    >
      <div className="todoTitle">{todo.title}</div>
      <div className="todoCardMeta">
        <div className="badges">
          {todo.rescheduleCount > 0 && (
            <span className="rescheduleBadge">
              {todo.rescheduleCount}x RESCHEDULE
            </span>
          )}
          {isOverdue && <span className="overdueBadge">OVERDUE</span>}
        </div>
        <div className="actionSection">
          {groupIsToday && todo.status === TodoStatus.Todo && (
            <>
              <button
                className="doneButton"
                type="button"
                aria-label="Done"
              >
                <svg className="icon" aria-hidden="true">
                  <use href="#icon-done" />
                </svg>
                <span className="btnLabel" aria-hidden="true">
                  Done
                </span>
              </button>
              <button
                className="rescheduleButton"
                type="button"
                aria-label="Reschedule"
              >
                <svg className="icon" aria-hidden="true">
                  <use href="#icon-reschedule" />
                </svg>
                <span className="btnLabel" aria-hidden="true">
                  Reschedule
                </span>
              </button>
              <button
                className="cancelButton"
                type="button"
                aria-label="Cancel"
              >
                <svg className="icon" aria-hidden="true">
                  <use href="#icon-cancel" />
                </svg>
                <span className="btnLabel" aria-hidden="true">
                  Cancel
                </span>
              </button>
            </>
          )}
          <button className="deleteButton" type="button" aria-label="Delete">
            <svg className="icon" aria-hidden="true">
              <use href="#icon-delete" />
            </svg>
            <span className="btnLabel" aria-hidden="true">
              Delete
            </span>
          </button>
        </div>
      </div>
    </article>
  )
}

export default TodoRow
