import { model, Schema } from 'mongoose'

const LectureSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  video_url: {
    type: String,
  },
  course_id: {
    type: String,
    required: true,
  },
  milestone_id: {
    type: String,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
})

export const Lecture = model('Lecture', LectureSchema)
