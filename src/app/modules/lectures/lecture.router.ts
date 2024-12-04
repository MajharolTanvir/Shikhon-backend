import { ENUM_USER_ROLE } from '../../../enums/users'
import auth from '../../middlewares/auth'
import validationRequest from '../../middlewares/validationRequest'
import { LectureController } from './lecture.controller'
import { LecturesValidation } from './lecture.validation'

const express = require('express')
const router = express.Router()

router.post(
  '/create-lecture',
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.MANAGER,
    ENUM_USER_ROLE.BRANCH_MANAGER,
    ENUM_USER_ROLE.INSTRUCTOR,
  ),
  validationRequest(LecturesValidation.createLecture),
  LectureController.createLecture,
)

router.get('/retrieve-all-lectures', LectureController.getAllLecture)

router.get('/retrieve-single-lecture/:id', LectureController.getSingleLecture)

router.patch(
  '/update-lecture/:id',
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.MANAGER,
    ENUM_USER_ROLE.BRANCH_MANAGER,
    ENUM_USER_ROLE.INSTRUCTOR,
  ),
  validationRequest(LecturesValidation.updateLecture),
  LectureController.updateLecture,
)

router.delete(
  '/delete-lecture/:id',
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.MANAGER,
    ENUM_USER_ROLE.BRANCH_MANAGER,
    ENUM_USER_ROLE.INSTRUCTOR,
  ),
  LectureController.deleteLecture,
)

export const LectureRouter = router
