import * as DetaOrm from 'deta-base-orm'

import { User, IUser } from './user.js'
import { isDev } from '../utils/variables.js'

export type Schema = {
	text: string,
	from: IUser | string,
	to: IUser | string
}

const schema = new DetaOrm.Schema<Schema>({
	text: 'string',
	from: User,
	to: User
})

export const Message = new DetaOrm.Base<Schema>('Message', schema, { offline: isDev })