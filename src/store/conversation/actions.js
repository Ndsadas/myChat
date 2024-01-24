import {
	GET_CONVERSATION_START,
	GET_CONVERSATION_SUCCESS,
	GET_CONVERSATION_ERROR,
	CREATE_CONVERSATION_START,
	CREATE_CONVERSATION_SUCCESS,
	CREATE_CONVERSATION_ERROR,
	DEL_CONVERSATION_START,
	DEL_CONVERSATION_SUCCESS,
	DEL_CONVERSATION_ERROR
} from './types'


export const getConversationStart = () => {
	return { type: GET_CONVERSATION_START }
}
export const getConversationSuccess = (conversation) => {
	return { type: GET_CONVERSATION_SUCCESS, payload: conversation }
}
export const getConversationError = (error) => {
	return { type: GET_CONVERSATION_ERROR }
}

export const createConversationStart = () => {
	return { type: CREATE_CONVERSATION_START }
}
export const createConversationSuccess = (conversation) => {
	return { type: CREATE_CONVERSATION_SUCCESS, payload: conversation }
}
export const createConversationError = (error) => {
	return { type: CREATE_CONVERSATION_ERROR }
}

export const delConversationStart = () => {
	return { type: DEL_CONVERSATION_START }
}
export const delConversationSuccess = (conversation) => {
	return { type: DEL_CONVERSATION_SUCCESS, payload: conversation }
}
export const delConversationError = (error) => {
	return { type: DEL_CONVERSATION_ERROR, payload: error }
}