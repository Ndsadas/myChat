import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveProfile } from '../../store/profile'

export const ProfileForm = ({ firstName, lastName, phone }) => {
	const [form, setForm] = useState({ firstName, lastName, phone })
	const dispatch = useDispatch()

	const handlerChangeForm = (e) => {
		const field = e.target.getAttribute('data-name')
		setForm({
			...form,
			[field]: e.target.value
		})
	}

	return (
		<div>
			<h1>Profile form:</h1>
			<div>
				<input
					placeholder="firstName"
					data-name='firstName' 
					onChange={handlerChangeForm}/>
				<br />
				<input
					placeholder="lastName"
					data-name='lastName' 
					onChange={handlerChangeForm}/>
				<br />
				<input
					placeholder="+7(000)000-00-00 phone"
					data-name='phone' 
					onChange={handlerChangeForm}/>

				<button onClick={() => dispatch(saveProfile(form))}>save</button>
			</div>
		</div>
	)
}