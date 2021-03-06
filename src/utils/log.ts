import Signale from 'signale'

export default new Signale.Signale({
	scope: 'WebCrate',
	logLevel: process.env.LOG_LEVEL || 'info',
	types: {
		success: {
			badge: 'â',
			color: 'green',
			label: 'success',
			logLevel: 'debug'
		},
		info: {
			badge: 'âšī¸',
			color: 'blue',
			label: 'info',
			logLevel: 'debug'
		},
		request: {
			badge: '->',
			color: 'gray',
			label: 'request',
			logLevel: 'debug'
		},
		debug: {
			badge: 'đ',
			color: 'cyan',
			label: 'debug',
			logLevel: 'info'
		}
	}
})