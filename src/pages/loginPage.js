import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { loginSelector, loginThunk, singInAccount } from '../store/login'
import { useDispatch, useSelector } from 'react-redux';


export const LoginPage = () => {

	const { email, password } = useSelector(loginSelector)
	const [form, setForm] = useState({ email, password })

	const handlerChangeForm = (e) => {
		const field = e.target.getAttribute('data-name')
		setForm({
			...form,
			[field]: e.target.value
		})
	}
	const dispatch = useDispatch()



	return (
		<>
			<div className="container">
				Log In
				<div className="logoInput">
					<div className='logoInfo inp'>
						<input
							onChange={handlerChangeForm}
							data-name='email'
							placeholder='Email' />
						<input
							onChange={handlerChangeForm}
							data-name='password'
							placeholder='Password' />
					</div>

					<div className='logoInfo'>
						<div>
							<Button
								onClick={() => dispatch(loginThunk(form))}
								variant="contained"
								endIcon={<SendIcon />}
							>Зарегистрироваться</Button>
						</div>
						<div>
							<Button
								onClick={() => dispatch(singInAccount(form))}
								variant="contained"
								endIcon={<SendIcon />}
							>Войти в аккаунт</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}