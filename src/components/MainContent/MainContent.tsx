import TodoInput from '../TodoInput/TodoInput'
import TodoList, { type TodoGroup } from '../TodoList/TodoList'
import './MainContent.css'

const todoGroups: TodoGroup[] = [
  {
    date: '27/10',
    isToday: false,
    todos: [
      {
        title:
          "Summarize feedback from the five pilot customers and send recommendations to product before Thursday's roadmap review",
        completed: true,
        badge: '2x RESCHEDULE',
        badgeType: 'reschedule',
      },
      {
        title: 'Confirm the catering count with the venue',
        completed: false,
        badge: 'OVERDUE',
        badgeType: 'overdue',
      },
      {
        title: 'Send the updated accessibility notes to the design team',
        completed: false,
        badge: '1x RESCHEDULE',
        badgeType: 'reschedule',
      },
    ],
  },
  {
    date: '26/10',
    isToday: true,
    todos: [
      {
        title: 'Brainstorm on the new TODO app.',
        completed: true,
        badge: '2x RESCHEDULE',
        badgeType: 'reschedule',
      },
      {
        title:
          "Compare the latest accessibility report with last month's results and assign owners for the remaining keyboard-navigation issues",
        completed: false,
      },
      {
        title: 'Integrate designed page in actuall app',
        completed: false,
        badge: 'OVERDUE',
        badgeType: 'overdue',
      },
      {
        title:
          'Prepare a handoff for the weekend on-call engineer with known alerts, open incidents, and escalation contacts',
        completed: true,
        badge: '2x RESCHEDULE',
        badgeType: 'reschedule',
      },
      {
        title: 'Create GUI in plain HTML and CSS.',
        completed: false,
      },
      {
        title: 'Integrate designed page in actuall app',
        completed: false,
        badge: 'OVERDUE',
        badgeType: 'overdue',
      },
    ],
  },
  {
    date: '25/10',
    isToday: false,
    todos: [
      {
        title: 'Audit the open support tickets and summarize repeat billing issues',
        completed: false,
        badge: '1x RESCHEDULE',
        badgeType: 'reschedule',
      },
      {
        title: 'Collect the print order',
        completed: false,
      },
      {
        title:
          "Compare the latest accessibility report with last month's results and assign owners for the remaining keyboard-navigation issues",
        completed: false,
        badge: 'OVERDUE',
        badgeType: 'overdue',
      },
      {
        title: 'Schedule an equipment return with IT',
        completed: false,
        badge: '2x RESCHEDULE',
        badgeType: 'reschedule',
      },
      {
        title: 'Confirm the event start time with the speakers',
        completed: false,
      },
      {
        title:
          'Prepare a handoff for the weekend on-call engineer with known alerts, open incidents, and escalation contacts',
        completed: false,
        badge: 'OVERDUE',
        badgeType: 'overdue',
      },
    ],
  },
]

function MainContent() {
  return (
    <main id="main-content">
      <TodoList groups={todoGroups} />
      <TodoInput />
    </main>
  )
}

export default MainContent
