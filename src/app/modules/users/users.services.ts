import { UserProfileType } from './users.interface'
import { UserProfile } from './users.model'

const createProfile = async (data: Partial<UserProfileType>, id: string) => {
  data.userId = id
  const profile = await UserProfile.create(data)
  return profile
}

const updateProfile = async (data: Partial<UserProfileType>, id: string) => {
  const updateData: any = {}

  if (data.presentAddress) {
    updateData['presentAddress'] = {
      country: data.presentAddress.country,
      street: data.presentAddress.street,
      city: data.presentAddress.city,
      zipCode: data.presentAddress.zipCode,
    }
  }

  if (data.permanentAddress) {
    updateData['permanentAddress'] = {
      country: data.permanentAddress.country,
      street: data.permanentAddress.street,
      city: data.permanentAddress.city,
      zipCode: data.permanentAddress.zipCode,
    }
  }

  if (data.guardian) {
    updateData['guardian'] = {
      name: data.guardian.name,
      relationship: data.guardian.relationship,
      contact: data.guardian.contact,
    }
  }

  if (data.education) {
    updateData['education'] = {
      study: data.education.study,
      institution: data.education.institution,
      current_study: data.education.current_study,
      startDate: data.education.startDate,
      endDate: data.education.endDate,
    }
  }

  if (data.contact) updateData['contact'] = data.contact
  if (data.profilePic) updateData['profilePic'] = data.profilePic
  if (data.gender) updateData['gender'] = data.gender
  if (data.dateOfBirth) updateData['dateOfBirth'] = data.dateOfBirth

  const profile = await UserProfile.findOneAndUpdate(
    { userId: id },
    { $set: updateData },
    { new: true },
  )

  return profile
}

export const UserProfileServices = {
  createProfile,
  updateProfile,
}
