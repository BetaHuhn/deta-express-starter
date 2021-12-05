import express from 'express'

import user from './user'
import message from './message'

export const router = express.Router()

router.use('/user', user)
router.use('/message', message)

export default router