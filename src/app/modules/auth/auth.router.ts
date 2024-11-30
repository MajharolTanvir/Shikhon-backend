import express from 'express'
import { UserControllers } from './auth.controller'
import validationRequest from '../../middlewares/validationRequest'
import { UserValidations } from './auth.validation'
import { ENUM_USER_ROLE } from '../../../enums/users'
import auth from '../../middlewares/auth'

const router = express.Router()

router.post(
  '/sign-up',
  validationRequest(UserValidations.signupZodSchema),
  UserControllers.signup,
)

router.post(
  '/confirm-sign-up',
  auth(ENUM_USER_ROLE.USER),
  UserControllers.confirmedSignup,
)

export const UserRoutes = router
