import { createProfileOnLogin } from '../../store/login'
import { auth } from '../../api/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

export const loginThunk = (profile) => (dispatch) => {
	dispatch(createProfileOnLogin(profile))

	createUserWithEmailAndPassword(auth, profile.email, profile.password)
}

export const singInAccount = (profile) => (dispatch) => {
	signInWithEmailAndPassword(auth, profile.email, profile.password)
}