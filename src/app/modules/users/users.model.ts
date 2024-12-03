import { model, Schema } from 'mongoose'
import { UserProfileModel, UserProfileType } from './users.interface'
import { GenderType } from './user.constant'

// Sub-schema for address
const AddressSchema = new Schema({
  country: { type: String },
  street: { type: String },
  city: { type: String },
  zipCode: { type: Number },
})

// Sub-schema for guardian
const GuardianSchema = new Schema({
  name: { type: String },
  relationship: { type: String },
  contact: { type: String },
})

// Sub-schema for education
const EducationSchema = new Schema({
  study: { type: String },
  institution: { type: String },
  current_study: { type: Boolean, default: false },
  startDate: { type: String },
  endDate: { type: String },
})

// Main schema for user profile
const UserProfileSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  presentAddress: AddressSchema,
  permanentAddress: AddressSchema,
  guardian: GuardianSchema,
  education: EducationSchema,
  gender: {
    type: String,
    enum: GenderType,
  },
  dateOfBirth: {
    type: String,
  },
  contact: {
    type: String,
  },
  profilePic: {
    type: String,
  },
})

export const UserProfile = model<UserProfileType, UserProfileModel>(
  'UserProfile',
  UserProfileSchema,
)
