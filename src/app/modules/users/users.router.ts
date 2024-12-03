const express = require('express')
import { ENUM_USER_ROLE } from '../../../enums/users'
import auth from '../../middlewares/auth'
import { UserProfileControllers } from './users.controller'

const router = express.Router()

router.patch(
  '/update-profile',
  auth(
    ENUM_USER_ROLE.USER,
    ENUM_USER_ROLE.STUDENT,
    ENUM_USER_ROLE.BRANCH_MANAGER,
    ENUM_USER_ROLE.MANAGER,
    ENUM_USER_ROLE.ADMIN,
  ),
  UserProfileControllers.updateProfile,
)

export const UserProfileRouter = router
