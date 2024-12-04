import { LectureType } from './lecture.interface'
import { Lecture } from './lecture.model'

const createLecture = async (lecture: LectureType) => {
  return await Lecture.create(lecture)
}

const getAllLecture = async () => {
  return await Lecture.find()
}

const getSingleLecture = async (id: string) => {
  return await Lecture.findById(id)
}

const updateLecture = async (data: Partial<LectureType>, id: string) => {
  return await Lecture.findByIdAndUpdate(id, data, { new: true })
}

const deleteLecture = async (id: string) => {
  await Lecture.findByIdAndDelete(id)
}

export const LectureServices = {
  createLecture,
  getAllLecture,
  getSingleLecture,
  updateLecture,
  deleteLecture,
}
