import styles from './message.module.css'
import classNames from 'classnames'

export const Message = ({ message }) => {
	return (
		<div className={classNames(styles.message, {
			[styles.currentMessage]: message.author === 'User',
		})}>
			<p>Author: {message.author}</p>
			<p>Text: {message.message}</p>
			<p>12.01</p>
		</div>
	)
}