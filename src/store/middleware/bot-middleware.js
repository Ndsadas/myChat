import { SEND_MESSAGES_SUCCESS, sendMessageWithThunk} from "../messages"


export const botMessage = (store) => (next) => (action) => {

	if (action.type === SEND_MESSAGES_SUCCESS && action.payload.message.author === 'User') {
		setTimeout(() => {
			store.dispatch(sendMessageWithThunk(action.payload.roomId, {
				author: 'Bot', message: 'Hello from Bot on middleware'
			}))
		}, 1000)
	}

	return next(action)
}