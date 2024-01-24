import { response } from './response'

export const getPublicApi = (page = 1) => {
	return response.get(`gists/public?page=${page}`)
}

export const getAnyGistsApi = () => {
	return response.get('users')
}

export const getUserApi = (name) => {
	return response.get(`users/${name}/gists`)
}