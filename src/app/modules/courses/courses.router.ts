import { ENUM_USER_ROLE } from '../../../enums/users'
import auth from '../../middlewares/auth'
import validationRequest from '../../middlewares/validationRequest'
import { CoursesController } from './courses.controller'
import { CoursesValidation } from './courses.validation'

const express = require('express')
const router = express.Router()

router.post(
  '/create-course',
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.MANAGER,
    ENUM_USER_ROLE.BRANCH_MANAGER,
  ),
  validationRequest(CoursesValidation.createCourse),
  CoursesController.createCourse,
)

router.get('/retrieve-all-courses', CoursesController.getAllCourse)

router.get('/retrieve-single-course/:id', CoursesController.getSingleCourse)

router.patch(
  '/update-course/:id',
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.MANAGER,
    ENUM_USER_ROLE.BRANCH_MANAGER,
  ),
  validationRequest(CoursesValidation.updateCourse),
  CoursesController.updateCourse,
)

router.delete(
  '/delete-course/:id',
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.MANAGER,
    ENUM_USER_ROLE.BRANCH_MANAGER,
  ),
  CoursesController.deleteCourse,
)

export const CoursesRouter = router
