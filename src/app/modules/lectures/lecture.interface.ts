import { Model } from 'mongoose'

export type LectureType = {
  _id?: string
  title: string
  description: string
  video_url: string
  course_id: string
  milestone_id: string
  isCompleted?: boolean
}

export type LectureModel = Model<LectureType, Record<string, unknown>>
