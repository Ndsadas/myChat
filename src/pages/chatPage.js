import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { Layout, MessageList, Chats } from '../components'
import { getConversationThunk } from '../store/conversation'
import { getMessagesWithThunk } from '../store/messages'

export const ChatPage = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getConversationThunk())
		dispatch(getMessagesWithThunk())
	}, [dispatch])

	return (
		<Routes>
			<Route path='/' element={<Layout chats={<Chats />} messageList={<div className='anyText'>Select chat room...</div>} />} />
			<Route path=':roomId' element={<Layout chats={<Chats />} messageList={<MessageList />} />} />
		</Routes>
	)
}