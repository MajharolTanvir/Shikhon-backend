import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { UserServices } from './auth.services'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { JwtPayload } from 'jsonwebtoken'

const signup = catchAsync(async (req: Request, res: Response) => {
  const user = req.body
  const result = await UserServices.signup(user)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Check your email to get the verification code',
    data: result,
  })
})

const confirmedSignup = catchAsync(async (req: Request, res: Response) => {
  const { userEmail } = req.user as JwtPayload
  const result = await UserServices.confirmedSignup(req.body, userEmail)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User account has been created successfully',
    data: result,
  })
})

export const UserControllers = {
  signup,
  // login,
  // forgetPassword,
  // resetPassword,
  // updateUserProfile,
  confirmedSignup,
}
