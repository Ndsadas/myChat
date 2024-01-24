import styled from './layout.module.css'

export const Layout = ({ chats, messageList}) => {
	return (
		<div className={styled.body}>
			<div className={styled.content}>
				<div className={styled.chats}>{chats}</div>
				<div className={styled.messages}>{messageList}</div>
			</div>
		</div>
	)
}