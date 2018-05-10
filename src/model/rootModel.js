import lessons from './lessons.json'
import students from './students.json'

export const rootModel = {
  students
}
const randomTimeout = () => 100 + Math.floor(Math.random() * 300)

export default {
  getLessons: (cb) => setTimeout(() => cb(lessons), randomTimeout()),
  getStudents: (cb) => setTimeout(() => cb(students), randomTimeout())
}
