import { CREATE_PROFILE_ON_LOGIN } from './types'

const initialState = {
	email: '',
	password: ''
}

export const loginReducer = (state = initialState, actions) => {
	switch (actions.payload) {
		case CREATE_PROFILE_ON_LOGIN:
			return { ...state, ...actions.payload}
		default:
			return state
	}
}