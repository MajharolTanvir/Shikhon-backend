import { MilestoneType } from './milestone.interface'
import { Milestone } from './milestone.model'

const createMilestone = async (milestone: MilestoneType) => {
  return await Milestone.create(milestone)
}

const getAllMilestone = async () => {
  return await Milestone.find()
}

const getSingleMilestone = async (id: string) => {
  return await Milestone.findById(id)
}

const updateMilestone = async (data: Partial<MilestoneType>, id: string) => {
  return await Milestone.findByIdAndUpdate(id, data, { new: true })
}

const deleteMilestone = async (id: string) => {
  await Milestone.findByIdAndDelete(id)
}

export const MilestoneServices = {
  createMilestone,
  getAllMilestone,
  getSingleMilestone,
  updateMilestone,
  deleteMilestone,
}
