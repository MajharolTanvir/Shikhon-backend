import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { MilestoneServices } from './milestone.services'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'

const createMilestone = catchAsync(async (req: Request, res: Response) => {
  const result = await MilestoneServices.createMilestone(req.body)

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Milestone created successfully',
    data: result,
  })
})

const getAllMilestone = catchAsync(async (req: Request, res: Response) => {
  const result = await MilestoneServices.getAllMilestone()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All milestone retrieved successfully',
    data: result,
  })
})

const getSingleMilestone = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await MilestoneServices.getSingleMilestone(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single milestone retrieved successfully',
    data: result,
  })
})

const getUpdateMilestone = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await MilestoneServices.updateMilestone(req.body, id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Update milestone successfully',
    data: result,
  })
})

const deleteMilestone = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await MilestoneServices.deleteMilestone(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Delete milestone successfully',
    data: result,
  })
})

export const MilestoneController = {
  createMilestone,
  getAllMilestone,
  getSingleMilestone,
  getUpdateMilestone,
  deleteMilestone,
}
