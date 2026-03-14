export const createTask = (text) => ({
  id: Date.now(),
  text,
  completed: false,
})