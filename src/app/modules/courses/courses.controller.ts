import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { CoursesServices } from './courses.services'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'

const createCourse = catchAsync(async (req: Request, res: Response) => {
  const result = await CoursesServices.createCourse(req.body)

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Course created successfully',
    data: result,
  })
})

const getAllCourse = catchAsync(async (req: Request, res: Response) => {
  const result = await CoursesServices.getAllCourse()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All course retrieved successfully',
    data: result,
  })
})

const getSingleCourse = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await CoursesServices.getSingleCourse(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single course retrieved successfully',
    data: result,
  })
})

const updateCourse = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await CoursesServices.updateCourse(req.body, id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Update course successfully',
    data: result,
  })
})

const deleteCourse = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await CoursesServices.deleteCourse(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Delete course successfully',
  })
})

export const CoursesController = {
  createCourse,
  getAllCourse,
  getSingleCourse,
  updateCourse,
  deleteCourse,
}
