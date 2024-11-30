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

const signIn = catchAsync(async (req: Request, res: Response) => {
  const userData = req.body
  const result = await UserServices.signIn(userData)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User login successfully',
    data: result,
  })
})

const forgetPassword = catchAsync(async (req: Request, res: Response) => {
  const { email } = req.body
  const result = await UserServices.forgetPassword(email)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Password reset link sent successfully. Please check your email',
    data: result,
  })
})

const resetPassword = catchAsync(async (req: Request, res: Response) => {
  const token = req.query.token as string
  const { password } = req.body
  const result = await UserServices.resetPassword(token, password)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Password reset successfully',
    data: result,
  })
})

export const UserControllers = {
  signup,
  signIn,
  forgetPassword,
  resetPassword,
  confirmedSignup,
}
