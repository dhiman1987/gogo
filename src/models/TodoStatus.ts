export const TodoStatus = {
  Todo: 'todo',
  Done: 'done',
  Cancelled: 'cancelled',
} as const

export type TodoStatus = (typeof TodoStatus)[keyof typeof TodoStatus]
