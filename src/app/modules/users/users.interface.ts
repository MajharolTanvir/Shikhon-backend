import { Model } from 'mongoose'
import { GenderType } from './user.constant'

export type UserProfileType = {
  _id?: string
  userId: string
  presentAddress: {
    country: string
    street: string
    city: string
    zipCode: string
  }
  permanentAddress: {
    country: string
    street: string
    city: string
    zipCode: string
  }
  guardian: {
    name: string
    relationship: string
    contact: string
  }
  education: {
    study: string
    institution: string
    current_study: boolean
    startDate: string
    endDate: string
  }
  gender: GenderType
  dateOfBirth: string
  contact: string
  profilePic: string
}

export type UserProfileModel = Model<UserProfileType, Record<string, unknown>>
