import { Chat } from './chat'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from 'react';
import { conversationSelector, createConversationThunk, delConversationThunk } from '../../store/conversation'
import Button from '@mui/material/Button';


export const Chats = () => {
	const chatList = useSelector(conversationSelector)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { roomId } = useParams()

	const deleteChat = useCallback((event, chatId) => {
		event.preventDefault();
		dispatch(delConversationThunk(chatId))
		navigate('/chats')

	}, [dispatch, navigate])


	const createChat = () => {
		const nameChat = prompt('Enter name Chat')
		const findElem = chatList.some((elem) => elem.name === nameChat)

		if (!findElem && nameChat) {
			dispatch(createConversationThunk(nameChat))
		} else {
			alert('not a correct name')
		}
	}

return (
	<>
		{chatList.map((chat) => (
			<Link key={chat} to={`/chats/${chat}`}>
				<Chat
					chat={chat}
					selected={chat === roomId}
					deleteChat={deleteChat} />
			</Link>
		))}
		<Button variant="contained" onClick={createChat}>Create Chat</Button>
	</>
)
}
