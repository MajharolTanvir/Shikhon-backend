import { Model } from 'mongoose'
import { RoleType } from './auth.constant'

export type UserType = {
  _id?: string
  firstName: string
  lastName: string
  email: string
  password: string
  role: RoleType
  confirmationCode: number
  validation: boolean
  token: string
}

export type UserMethodType = {
  isUserExist(email: string): Promise<Partial<UserType> | null>
  isPasswordMatch(
    givenPassword: string,
    savedPassword: string,
  ): Promise<boolean>
}

export type UserModel = Model<UserType, Record<string, unknown>, UserMethodType>
