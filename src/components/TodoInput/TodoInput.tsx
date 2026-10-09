import './TodoInput.css'

function TodoInput() {
  return (
    <section className="addNoteSection" aria-label="Add a todo">
      <textarea className="addNote" aria-label="Todo description" />
      <div className="addNoteSecondRow">
        <input
          className="todoDatePicker"
          type="date"
          aria-label="Todo date"
        />
        <button className="addNoteButton" type="button">
          <svg className="icon" aria-hidden="true">
            <use href="#icon-add-todo" />
          </svg>
          <span className="btnLabel">Add todo</span>
        </button>
      </div>
    </section>
  )
}

export default TodoInput
