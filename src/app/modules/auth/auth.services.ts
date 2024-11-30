import config from '../../../config'
import nodemailer from 'nodemailer'
import { UserType } from './auth.interface'
import { User } from './auth.model'
import { JwtHelper } from '../../../helpers/jwtHelper'
import { Secret } from 'jsonwebtoken'
import sendSignUpCode from '../../../email/signup_email'
import ApiError from '../../../errors/ApiError'
import httpStatus from 'http-status'

const signup = async (userData: UserType) => {
  const min = 100000
  const max = 999999
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min

  userData.confirmationCode = randomNum
  const user = await User.create(userData)

  const { _id: userId, email: userEmail, role } = user
  const accessToken = JwtHelper.createToken(
    { userId, userEmail, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string,
  )

  await sendSignUpCode(user.firstName, user.email, user.confirmationCode)

  return { accessToken }
}

const confirmedSignup = async (data: any, userEmail: string) => {
  const isUserExist = await User.findOne({ email: userEmail })

  if (!isUserExist) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email not found!')
  }

  if (isUserExist.confirmationCode === data.confirmationCode) {
    await User.findOneAndUpdate(
      { _id: isUserExist._id },
      {
        validation: true,
        confirmationCode: 0,
      },
      { new: true },
    )
  } else {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Confirmation code is invalid!')
  }

  return await User.findOne({ email: userEmail })
}

const signIn = async (userData: Partial<UserType>) => {
  const { email, password } = userData

  const user = new User()
  const isUserExist = await user.isUserExist(email as string)

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist')
  }

  if (
    isUserExist.password &&
    !(await user.isPasswordMatch(password as string, isUserExist.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password does not match')
  }

  const { _id: userId, email: userEmail, role } = isUserExist
  const accessToken = JwtHelper.createToken(
    { userId, userEmail, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string,
  )

  const refreshToken = JwtHelper.createToken(
    { userId, userEmail, role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expire_in as string,
  )

  return {
    accessToken,
    refreshToken,
  }
}

export const UserServices = {
  signup,
  signIn,
  // forgetPassword,
  // resetPassword,
  confirmedSignup,
}
