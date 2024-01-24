import {CREATE_PROFILE_ON_LOGIN} from './types'

export const createProfileOnLogin = (login) => {
	return { type: CREATE_PROFILE_ON_LOGIN, payload: login}
}