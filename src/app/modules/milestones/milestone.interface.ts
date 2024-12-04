import { Model } from 'mongoose'
import { MilestoneStatus } from './milestone.constant'

export type MilestoneType = {
  _id?: string
  title: string
  status: MilestoneStatus
  course_id: string
}

export type MilestoneModel = Model<MilestoneType, Record<string, unknown>>
