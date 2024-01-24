import {
	SEND_MESSAGES_SUCCESS,
	SEND_MESSAGES_ERROR,
	GET_MESSAGES_START,
	GET_MESSAGES_SUCCESS,
	GET_MESSAGES_ERROR
} from './types'

export const sendMessageSuccess = (roomId, message) => {
	return { type: SEND_MESSAGES_SUCCESS, payload: { roomId, message } }
}
export const sendMessageError = (error) => {
	return { type: SEND_MESSAGES_ERROR, payload: error }
}

export const getMessagesStart = () => {
	return {type: GET_MESSAGES_START}
}
export const getMessagesSuccess = (message) => {
	return {type: GET_MESSAGES_SUCCESS, payload: message}
}
export const getMessagesError = (error) => {
	return {type: GET_MESSAGES_ERROR, payload: error}
}