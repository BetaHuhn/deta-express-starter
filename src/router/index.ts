import express from 'express'

import apiRouter from './api/index.js'

export const router = express.Router()

router.use('/api/v1', apiRouter)

router.get('/', (_req, res) => res.ok('Hello World!'))

export default router