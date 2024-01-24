import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gistsSelector } from '../store/gists'
import { getGists, getUser } from '../store/gists'


const button = Array.from({ length: 10 }).map((_, index) => index + 1)

export const GistsPage = () => {
	const { gists, pending, error, name, nameUserGist } = useSelector(gistsSelector)
	const dispatch = useDispatch()
	const [value, setValue] = useState('')

	useEffect(() => {
		if (!gists.length) {
			dispatch(getGists())
		}
	}, [gists, dispatch])


	const searchUser = (nameUser) => {
		dispatch(getUser(nameUser))
	}

	if (error) {
		return <h1>ERROR: {error}</h1>
	}

	return (
		<>
			<div className='gistUser'>
				<p className='logoGistUser'>Users:</p>
				{pending ? (
					<h1>pending...</h1>
				) : (
					name.map((name, index) => {
						return (
							<div key={index}>{name.login}</div>
						)
					})
				)}
			</div>
			<hr />
			<input
				value={value}
				placeholder='Введите ник нейм'
				onChange={(e) => setValue(e.target.value)} />
			<button onClick={() => searchUser(value)}>Search</button>

			<div>
				{pending ? (
					<h1>pending...</h1>
				) : (
					nameUserGist.map((gistUser, index) => {
						return (
							<div key={index}>
								<p>{gistUser.url}</p>
							</div>
						)
					})
				)}
			</div>

			<div>
				{button.map((btn, index) => (
					<button onClick={() => dispatch(getGists(btn))} key={index}>{btn}</button>
				))}
			</div>
		</>
	)
}