import { CourseType } from './courses.interface'
import { Course } from './courses.model'

const createCourse = async (course: CourseType) => {
  return await Course.create(course)
}

const getAllCourse = async () => {
  return await Course.find()
}

const getSingleCourse = async (id: string) => {
  return await Course.findById(id)
}

const updateCourse = async (data: Partial<CourseType>, id: string) => {
  return await Course.findByIdAndUpdate(id, data, { new: true })
}

const deleteCourse = async (id: string) => {
  await Course.findByIdAndDelete(id)
}

export const CoursesServices = {
  createCourse,
  getAllCourse,
  getSingleCourse,
  updateCourse,
  deleteCourse,
}
