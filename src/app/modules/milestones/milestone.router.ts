import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/users'
import { MilestoneController } from './milestone.controller'
import validationRequest from '../../middlewares/validationRequest'
import { MilestonesValidation } from './milestone.validation'

const express = require('express')
const router = express.Router()

router.post(
  '/create-milestone',
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.MANAGER,
    ENUM_USER_ROLE.BRANCH_MANAGER,
    ENUM_USER_ROLE.INSTRUCTOR,
  ),
  validationRequest(MilestonesValidation.createMilestone),
  MilestoneController.createMilestone,
)

router.get('/retrieve-all-milestones', MilestoneController.getAllMilestone)

router.get(
  '/retrieve-single-milestone/:id',
  MilestoneController.getSingleMilestone,
)

router.patch(
  '/update-milestone/:id',
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.MANAGER,
    ENUM_USER_ROLE.BRANCH_MANAGER,
    ENUM_USER_ROLE.INSTRUCTOR,
  ),
  validationRequest(MilestonesValidation.updateMilestone),
  MilestoneController.getUpdateMilestone,
)

router.delete(
  '/delete-milestone/:id',
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.MANAGER,
    ENUM_USER_ROLE.BRANCH_MANAGER,
    ENUM_USER_ROLE.INSTRUCTOR,
  ),
  MilestoneController.deleteMilestone,
)

export const MilestoneRouter = router
