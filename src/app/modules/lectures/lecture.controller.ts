import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { LectureServices } from './lecture.services'
import httpStatus from 'http-status'

const createLecture = catchAsync(async (req: Request, res: Response) => {
  const result = await LectureServices.createLecture(req.body)

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Lecture created successfully',
    data: result,
  })
})

const getAllLecture = catchAsync(async (req: Request, res: Response) => {
  const result = await LectureServices.getAllLecture()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All lecture retrieved successfully',
    data: result,
  })
})

const getSingleLecture = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await LectureServices.getSingleLecture(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single lecture retrieved successfully',
    data: result,
  })
})

const updateLecture = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await LectureServices.updateLecture(req.body, id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Update lecture successfully',
    data: result,
  })
})

const deleteLecture = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  await LectureServices.deleteLecture(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Delete lecture successfully',
  })
})

export const LectureController = {
  createLecture,
  getAllLecture,
  getSingleLecture,
  updateLecture,
  deleteLecture,
}
