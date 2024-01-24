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

const initialState = {
	conversation: [],
	pending: false,
	pendingCreate: false,
	pendingDel: false,
	error: null,
	errorCreate: null,
	errorDel: null
}


export const conversationReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CONVERSATION_START:
			return { ...state, pending: true, error: null }
		case GET_CONVERSATION_SUCCESS:
			return { ...state, pending: false, conversation: action.payload }
		case GET_CONVERSATION_ERROR:
			return { ...state, pending: false, error: action.payload }

		case CREATE_CONVERSATION_START:
			return { ...state, pendingCreate: true, errorCreate: null }
		case CREATE_CONVERSATION_SUCCESS:
			return { ...state, pendingCreate: false, conversation: [...state.conversation, action.payload] }
		case CREATE_CONVERSATION_ERROR:
			return { ...state, pendingCreate: false, errorCreate: action.payload }

		case DEL_CONVERSATION_START:
			return { ...state, pendingDel: true, errorDel: null }
		case DEL_CONVERSATION_SUCCESS:
			return {
				...state, pendingDel: false, conversation: state.conversation.filter((chat) => chat !== action.payload
				)
			}
		case DEL_CONVERSATION_ERROR:
			return { ...state, pendingDel: false, errorDel: action.payload }
		default:
			return state
	}
} 