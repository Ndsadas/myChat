import { child, get, push, ref } from "firebase/database"
import { database } from "./firebase"


export const createMessagesApi = (roomId, message) => {
	return push(child(ref(database), `messages/${roomId}`), message)
}

export const getMessageApi = () => {
	return get(child(ref(database), 'messages'))
}