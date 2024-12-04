import { model, Schema } from 'mongoose'
import { MilestoneStatus } from './milestone.constant'

const MilestoneSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: MilestoneStatus,
    required: true,
  },
  course_id: {
    type: String,
    required: true,
  },
})

export const Milestone = model('Milestone', MilestoneSchema)
