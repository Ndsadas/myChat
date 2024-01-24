import {
	getConversationError,
	getConversationStart,
	getConversationSuccess,
	createConversationStart,
	createConversationSuccess,
	createConversationError,
	delConversationStart,
	delConversationSuccess,
	delConversationError
} from './actions'
import { getConversationApi, createConversationApi, delConversationApi } from '../../api/conversation'

export const getConversationThunk = () => async (dispatch) => {
	const conversation = []
	try {
		dispatch(getConversationStart())

		const snap = await getConversationApi()
		snap.forEach((el) => {
			conversation.push(el.val())
		})
		dispatch(getConversationSuccess(conversation))
	} catch (error) {
		dispatch(getConversationError(error))
	}
}

export const createConversationThunk = (conversation) => async (dispatch) => {
	try {
		dispatch(createConversationStart)

		await createConversationApi(conversation)

		dispatch(createConversationSuccess(conversation))
	} catch (error) {
		dispatch(createConversationError(error))
	}
}

export const delConversationThunk = (conversation) => async (dispatch) => {
	try {
		dispatch(delConversationStart)
		
		await delConversationApi(conversation)

		dispatch(delConversationSuccess(conversation))
	} catch (error) {
		dispatch(delConversationError(error))
	}
}