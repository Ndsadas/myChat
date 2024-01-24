import { getGistsStart, getGistsError, getGistsUsers, getUsersOnApiSuccess } from './actions'
import { getAnyGistsApi, getUserApi } from '../../api/gists'

export const getGists = (page) => async (dispatch) => {

	try {
		dispatch(getGistsStart())
		const { data } = await getAnyGistsApi()
		dispatch(getGistsUsers(data))

	} catch (error) {
		dispatch(getGistsError(error))
	}
	// try {
	// 	dispatch(getGistsStart())

	// 	const data = await getPublicApi(page)
	// 	dispatch(getGistsSuccess(data))

	// } catch (error) {
	// 	dispatch(getGistsError(error))
	// }
}

export const getUser = (name) => async (dispatch) => {
	try {
		dispatch(getGistsStart())
		const { data } = await getUserApi(name)
		dispatch(getUsersOnApiSuccess(data))

	} catch (error) {
		dispatch(getGistsError(error))
	}
}