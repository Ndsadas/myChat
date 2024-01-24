import { InputAdornment } from "@mui/material"
import React, { useState, useCallback, useMemo } from "react"
import { Input, SendIcon } from './style'
import { Message } from './messageList'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { messagesSelector, sendMessageWithThunk } from '../../store/messages'

export const MessageList = () => {
	const { roomId } = useParams()
	const select = useMemo(() => messagesSelector(roomId), [roomId])
	const messages = useSelector(select)
	const dispatch = useDispatch()
	const [value, setValue] = useState('')

	const send = useCallback(
		(message, author = 'User') => {
			if (message) {
				dispatch(sendMessageWithThunk(roomId, { message, author }))
				setValue('')
			}
		}, [roomId, dispatch])

	const onPressKeyDown = ({ code }) => {
		if (code === 'Enter') {
			send(value)
		}
	}

	return (
		<>
			<div>
				{
					messages.map((message, index) => (
						<Message message={message} key={index} />
					))
				}
			</div>
			<Input placeholder="Введите ссобщение"
				endAdornment={
					<InputAdornment position="end">
						{value && <SendIcon onClick={() => send(value)} />}
					</InputAdornment>
				}
				fullWidth
				autoFocus
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onKeyDown={onPressKeyDown}
			/>
		</>
	)
}