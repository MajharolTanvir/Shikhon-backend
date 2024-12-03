import { Model } from 'mongoose'
import { CourseLessonType, CoursePublishType } from './courses.constant'

export type CourseType = {
  _id?: string
  title: string
  description: string
  promo_video: string
  thumbnail: string
  batch_number: string
  main_price: number
  discount_percentage: number
  promo_code: string
  promo_description: string
  lesson_type: CourseLessonType
  startDate: string
  endDate: string
  enrollmentStartDate: string
  enrollmentEndDate: string
  publish_status: CoursePublishType
}

export type CourseModel = Model<CourseType, Record<string, unknown>>
