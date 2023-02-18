import express from 'express'
import { registerView, loginView, forgotPasswordView, setNewPasswordView } from '../../controllers/web/authController'
import { dashboardView, evtolsView, evtolView, loadEvtolView, deliveryHistoryView } from '../../controllers/web/dashboardController'
import { usersView, userView } from '../../controllers/web/userController'
import { validateResetLink } from '../../middlewares/validateResetLink'

export const WebRoutes = express.Router()

WebRoutes.get('/', (req, res) => {
  res.redirect('/login')
})

WebRoutes.get('/signup', registerView)
WebRoutes.get('/login', loginView)
WebRoutes.get('/forgot-password', forgotPasswordView)
WebRoutes.get('/set-new-password', validateResetLink, setNewPasswordView)

WebRoutes.get('/dashboard', dashboardView)
WebRoutes.get('/evtols', evtolsView)
WebRoutes.get('/evtol/:vehicleId', evtolView)
WebRoutes.get('/evtol/:vehicleId/load', loadEvtolView)

WebRoutes.get('/deliveries', deliveryHistoryView)

WebRoutes.get('/users', usersView)
WebRoutes.get('/user/:userId', userView)
