import { useEffect, useState } from 'react'
import TaskForm from '../Components/TaskForm'
import TaskList from '../Components/TaskList'
import { createTask } from '../Interfaces/task'

function Home() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (text) => {
    const newTask = createTask(text)
    setTasks([newTask, ...tasks])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const editTask = (id) => {
    const currentTask = tasks.find((task) => task.id === id)
    const newText = prompt('Görevi güncelle:', currentTask.text)

    if (!newText || !newText.trim()) return

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    )
  }

  return (
    <div className="container py-5">
      <div className="mx-auto" style={{ maxWidth: '700px' }}>
        <h1 className="mb-4 text-center">Task Management Application</h1>
        <p className="text-center text-muted mb-4">
        A simple task management application built with React and Bootstrap, featuring CRUD operations.
        </p>

        <TaskForm onAdd={addTask} />

        <div className="text-center mb-3">
          <strong>Total tasks:</strong> {tasks.length} <br />
          <strong>Completed:</strong> {tasks.filter((task) => task.completed).length} / {tasks.length}
        </div>

        <TaskList
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleTask}
          onEdit={editTask}
        />
      </div>
    </div>
  )
}

export default Home