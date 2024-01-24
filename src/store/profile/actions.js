import { SAVE_PROFILE, TOGGLE_PROFILE } from './types'

export const toggleProfile = () => {
	return { type: TOGGLE_PROFILE }
}

export const saveProfile = (profile) => {
	return { type: SAVE_PROFILE, payload: profile }
}