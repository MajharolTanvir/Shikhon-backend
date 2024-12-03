import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { UserProfileServices } from './users.services'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'

const updateProfile = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user?.userId
  const result = await UserProfileServices.updateProfile(req.body, userId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Profile update successfully',
    data: result,
  })
})

export const UserProfileControllers = {
  updateProfile,
}
