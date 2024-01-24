import { TOGGLE_PROFILE, SAVE_PROFILE } from './types'

const initialProfile = {
	firstName: "firstName",
	lastName: "lastName",
	phone: "phone",
	isVisibleProfile: true
}

export const profileReducer = (state = initialProfile, action) => {
	switch (action.type) {
		case TOGGLE_PROFILE:
			return { ...state, isVisibleProfile: !state.isVisibleProfile }
		case SAVE_PROFILE:
			return { ...state, ...action.payload}
		default:
			return state
	}
}