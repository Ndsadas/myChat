import {
	GET_GISTS_START,
	GET_GISTS_SUCCESS,
	GET_GISTS_ERROR,
	SEARCH_GISTS_USERS,
	SEARCH_GISTS_USERS_ON_API,
	SEARCH_GISTS_USERS_ON_API_SUCCESS,
} from './types'

const initialState = {
	gists: [],
	pending: false,
	error: null,

	name: [],
	nameUserGist: []
}



export const gistsReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case GET_GISTS_START:
			return { ...state, pending: true, error: null }
		case GET_GISTS_SUCCESS:
			return { ...state, pending: false, gists: actions.payload }
		case GET_GISTS_ERROR:
			return { ...state, pending: false, error: actions.payload }
		case SEARCH_GISTS_USERS:
			return { ...state, pending: false, name: actions.payload }
		case SEARCH_GISTS_USERS_ON_API:
			return { ...state, pending: false, name: actions.payload }
		case SEARCH_GISTS_USERS_ON_API_SUCCESS:
			return { ...state, pending: false, nameUserGist: actions.payload }
		// case SEARCH_GISTS_USERS_ON_API_ERROR:
		// 	return { ...state, pending: false, error: actions.payload }
		default:
			return state
	}
}