import express from 'express'
import { authRoutes } from './v1/auth'
import { vehicleRoutes } from './v1/vehicle'
import { loadRoutes } from './v1/load'
import { requiresAuth } from '../../middlewares/requireAuth'

export const ApiRoutes = express.Router()

ApiRoutes.use('/v1/auth', authRoutes)
ApiRoutes.use('/v1/vehicle', requiresAuth, vehicleRoutes)
ApiRoutes.use('/v1/load', requiresAuth, loadRoutes)
