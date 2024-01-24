import { NavLink } from "react-router-dom"
import { signOut } from 'firebase/auth'
import { auth } from '../../api/firebase'

const isAuthorMenu = [
	{
		id: 111,
		title: 'Home',
		to: '/'
	},
	{
		id: 112,
		title: 'Chats',
		to: '/chats'
	},
	{
		id: 113,
		title: 'Profile',
		to: '/profile'
	},
	{
		id: 114,
		title: 'Gists',
		to: '/gists'
	},
]

const isNotAuthorMenu = [
	{
		id: 115,
		title: 'Login',
		to: '/login'
	},
	{
		id: 111,
		title: 'Home',
		to: '/'
	},
]	


export const Header = ({ isAuthor }) => {
	return (
		<>
			<div className="user">
				<div>User: {isAuthor}</div>
				<button onClick={() => signOut(auth)}>Выход из аккаунта</button>
			</div>

			<div className="anyHeader">
				{!!isAuthor ? (isAuthorMenu.map((elem) => (
					<NavLink
						key={elem.to}
						to={elem.to}>
						{elem.title}
					</NavLink>
				))) : (
					isNotAuthorMenu.map((elem) => (
						<NavLink
							key={elem.to}
							to={elem.to}>
							{elem.title}
						</NavLink>
					))
				)
				}

			</div>
		</>
	)
}