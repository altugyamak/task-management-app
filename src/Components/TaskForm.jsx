import { useState } from 'react'

function TaskForm({ onAdd }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text.trim()) return

    onAdd(text)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Type a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  )
}

export default TaskForm