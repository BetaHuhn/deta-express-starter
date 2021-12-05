import * as DetaOrm from 'deta-base-orm'
import { isDev } from '../utils/variables.js'

export type IUser = {
	username: string,
	email: string
}

const schema = new DetaOrm.Schema<IUser>({
	username: 'string',
	email: 'string'
})

export const User = new DetaOrm.Base<IUser>('User', schema, { offline: isDev })