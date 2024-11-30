import express from 'express'
import { UserRoutes } from '../modules/auth/auth.router'
const router = express.Router()

const moduleRoutes = [
  {
    path: '/auth',
    routes: UserRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.routes))

export default router
