/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare namespace Express {
	export interface Response {
		ok: (data?: any) => void,
		fail: (statusCode: number, error?: any, statusMessage?: string) => void
	}
}