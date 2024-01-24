import {
	GET_GISTS_START,
	GET_GISTS_SUCCESS,
	GET_GISTS_ERROR,
	SEARCH_GISTS_USERS,
	SEARCH_GISTS_USERS_ON_API,
	SEARCH_GISTS_USERS_ON_API_SUCCESS,
} from './types'

export const getGistsStart = () => {
	return { type: GET_GISTS_START }
}

export const getGistsSuccess = (gists) => {
	return { type: GET_GISTS_SUCCESS, payload: gists }
}

export const getGistsError = (err) => {
	return { type: GET_GISTS_ERROR, payload: err }
}

export const getGistsUsers = (users) => {
	return { type: SEARCH_GISTS_USERS, payload: users }
}

export const getUsersOnApi = (gistUser) => {
	return { type: SEARCH_GISTS_USERS_ON_API, payload: gistUser }
}

export const getUsersOnApiSuccess = (gistUserGists) => {
	return { type: SEARCH_GISTS_USERS_ON_API_SUCCESS, payload: gistUserGists }
}
