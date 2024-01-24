import {
	SEND_MESSAGES_SUCCESS,
	SEND_MESSAGES_ERROR,
	GET_MESSAGES_START,
	GET_MESSAGES_SUCCESS,
	GET_MESSAGES_ERROR
} from './types'

export const initialState = {
	messages: {},
	pending: false,
	error: null,
	errorSend: null
}

export const messagesReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case SEND_MESSAGES_SUCCESS:
			return {
				...state,
				messages: {
					...state.messages,
					[actions.payload.roomId]: [
						...(state.messages[actions.payload.roomId] ?? []),
						{ ...actions.payload.message }
					]
				}
			}
		case SEND_MESSAGES_ERROR:
			return { ...state, error: actions.payload }

		case GET_MESSAGES_START:
			return { ...state, pending: true, error: null }
		case GET_MESSAGES_SUCCESS:
			return { ...state, pending: false, messages: actions.payload }
		case GET_MESSAGES_ERROR:
			return { ...state, pending: false, error: actions.payload }
		default:
			return state
	}
}
