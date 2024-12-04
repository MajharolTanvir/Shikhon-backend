import express from 'express'
import { UserRoutes } from '../modules/auth/auth.router'
import { UserProfileRouter } from '../modules/users/users.router'
import { CoursesRouter } from '../modules/courses/courses.router'
import { MilestoneRouter } from '../modules/milestone/milestone.router'
const router = express.Router()

const moduleRoutes = [
  {
    path: '/auth',
    routes: UserRoutes,
  },
  {
    path: '/profile',
    routes: UserProfileRouter,
  },
  {
    path: '/courses',
    routes: CoursesRouter,
  },
  {
    path: '/milestones',
    routes: MilestoneRouter,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.routes))

export default router
