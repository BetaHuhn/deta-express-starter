import express from 'express'

import { Message } from '../../models/message.js'
import log from '../../utils/log.js'

export const router = express.Router()

router.post('/', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
	try {
		const { text, from, to } = req.body

		log.info(`Creating new message: "${ text }"`)

		const message = await Message.save({ text, from, to })

		log.debug(message)
		res.ok(message)
	} catch (err) {
		return next(err)
	}
})

router.get('/', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
	try {
		log.info(`Getting all messages`)
		const messages = await Message.find({})

		log.debug(messages)
		res.ok(messages)
	} catch (err) {
		return next(err)
	}
})

router.get('/sent/:user', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
	try {
		const userKey = req.params.user

		log.info(`Getting all messages sent from user "${ userKey }"`)
		const messages = await Message.find({ from: userKey })

		log.debug(messages)
		res.ok(messages)
	} catch (err) {
		return next(err)
	}
})

router.get('/received/:user', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
	try {
		const userKey = req.params.user

		log.info(`Getting all messages received by user "${ userKey }"`)
		const messages = await Message.find({ to: userKey })

		log.debug(messages)
		res.ok(messages)
	} catch (err) {
		return next(err)
	}
})

router.get('/:key', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
	try {
		const key = req.params.key

		log.info(`Getting message with key ${ key }`)
		const message = await Message.findByKey(key)

		await message?.populate('to')
		await message?.populate('from')

		log.debug(message)
		res.ok(message)
	} catch (err) {
		return next(err)
	}
})

export default router