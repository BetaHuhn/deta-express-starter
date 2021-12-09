import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import * as runningAt from 'running-at'
import dotenv from 'dotenv'
dotenv.config()

import routes from './router/index.js'
import { routeLog, sendResponse, disableCaching } from './middleware/index.js'
import log from './utils/log.js'

const app = express()

app.use(routeLog)
app.use(sendResponse)

app.use(bodyParser.json())
app.use(cors())

// Disable caching for /, reference: https://www.notion.so/Turning-off-Caching-on-the-Root-9879ed9411a4486dbeaf4cc57697d610
app.use(disableCaching)

// Use router
app.use(routes)

app.use((err: any, _req: express.Request, res: express.Response, next: express.NextFunction) => {
	if (!err) {
		return next()
	}

	let returnStatus
	let message = err.message || 'An unkown error ocurred, please try again.'
	if (err.name === 'HTTPError') {
		log.warn('Metdata parsing failed: ' + err.message)
		returnStatus = 500
		message = 'Could not get metadata for url'
	} else {
		log.fatal(err)
		returnStatus = typeof err === 'number' ? err : 400
	}

	res.fail(returnStatus, err.message, message)
})

// Start the server if file is directly run
if (require.main === module) {
	try {
		const PORT = process.env.PORT || 3000

		app.listen(PORT, () => runningAt.print(PORT))
	} catch (err) {
		console.log(err)
		process.exit(1)
	}
}

export default app