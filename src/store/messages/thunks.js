import {
	sendMessageSuccess,
	sendMessageError,
	getMessagesStart,
	getMessagesSuccess,
	getMessagesError
} from "./actions"
import { createMessagesApi, getMessageApi } from "../../api/messages"



export const sendMessageWithThunk = (roomId, { message, author }) => async (dispatch) => {
	try {

		await createMessagesApi(roomId, { message, author })

		dispatch(sendMessageSuccess(roomId, { message, author }))
	} catch (error) {
		dispatch(sendMessageError(error))
	}
}

export const getMessagesWithThunk = () => async (dispatch) => {
	const messages = {}
	try {
		dispatch(getMessagesStart)

		const snap = await getMessageApi()
		snap.forEach((el) => {
			messages[el.key] = Object.values(el.val())
		})

		dispatch(getMessagesSuccess(messages))

	} catch (error) {
		dispatch(getMessagesError(error))
	}
}