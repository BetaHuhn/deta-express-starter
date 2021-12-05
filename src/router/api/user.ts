import express from 'express'

import { User } from '../../models/user.js'
import log from '../../utils/log.js'

export const router = express.Router()

router.post('/', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
	try {
		const { username, email } = req.body

		log.info(`Creating user ${ username } with email ${ email }`)
		const user = await User.save({ username, email })

		log.debug(user)
		res.ok(user)
	} catch (err) {
		return next(err)
	}
})

router.get('/', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
	try {
		log.info(`Getting all users`)
		const users = await User.find({})

		log.debug(users)
		res.ok(users)
	} catch (err) {
		return next(err)
	}
})

router.get('/:key', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
	try {
		const key = req.params.key

		log.info(`Getting user with key ${ key }`)
		const user = await User.findByKey(key)

		log.debug(user)
		res.ok(user)
	} catch (err) {
		return next(err)
	}
})

export default router