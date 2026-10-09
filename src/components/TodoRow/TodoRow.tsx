import type { Todo } from '../TodoList/TodoList'
import './TodoRow.css'

type TodoRowProps = {
  todo: Todo
  groupIsToday: boolean
}

function TodoRow({ todo, groupIsToday }: TodoRowProps) {
  return (
    <article className={`todoCard${todo.completed ? ' isDone' : ''}`}>
      <div className="todoTitle">{todo.title}</div>
      <div className="todoCardMeta">
        <div className="badges">
          {todo.badge && todo.badgeType && (
            <span className={`${todo.badgeType}Badge`}>{todo.badge}</span>
          )}
        </div>
        <div className="actionSection">
          {groupIsToday && !todo.completed && (
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
