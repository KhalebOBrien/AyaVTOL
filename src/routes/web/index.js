import express from 'express'
import { registerView, loginView, forgotPasswordView, setNewPasswordView } from '../../controllers/web/authController'
import { validateResetLink } from '../../middlewares/validateResetLink'

export const WebRoutes = express.Router()

WebRoutes.get('/', (req, res) => {
  res.redirect('/login')
})

WebRoutes.get('/signup', registerView)
WebRoutes.get('/login', loginView)
WebRoutes.get('/forgot-password', forgotPasswordView)
WebRoutes.get('/set-new-password', validateResetLink, setNewPasswordView)

