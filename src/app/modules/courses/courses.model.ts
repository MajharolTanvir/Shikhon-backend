import { model } from 'mongoose'
import { Schema } from 'mongoose'
import { CourseModel, CourseType } from './courses.interface'
import { CourseLessonType, CoursePublishType } from './courses.constant'

const CourseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  promo_video: {
    type: String,
  },
  batch_number: {
    type: String,
    required: true,
  },
  main_price: {
    type: Number,
    required: true,
  },
  discount_percentage: {
    type: Number,
  },
  promo_code: {
    type: String,
  },
  promo_description: {
    type: String,
  },
  lesson_type: {
    type: String,
    enum: CourseLessonType,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  enrollmentStartDate: {
    type: String,
    required: true,
  },
  enrollmentEndDate: {
    type: String,
    required: true,
  },
  publish_status: {
    type: String,
    enum: CoursePublishType,
    default: 'draft',
  },
})

export const Course = model<CourseType, CourseModel>('Course', CourseSchema)
