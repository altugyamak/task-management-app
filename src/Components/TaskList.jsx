function TaskList({ tasks, onDelete, onToggle, onEdit }) {
  if (tasks.length === 0) {
    return <p className="text-muted">No tasks have been added yet.</p>
  }

  return (
    <div className="list-group">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <div className="d-flex align-items-center gap-3">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
            />
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                opacity: task.completed ? 0.6 : 1,
              }}
            >
              {task.text}
            </span>
          </div>

          <div className="d-flex gap-2">
            <button
              className="btn btn-warning btn-sm"
              onClick={() => onEdit(task.id)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => onDelete(task.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskList