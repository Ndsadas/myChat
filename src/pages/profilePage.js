import { useSelector, useDispatch } from 'react-redux'
import { ProfileForm } from '../components'
import { toggleProfile } from '../store/profile'

export const ProfilePage = () => {
	const profile = useSelector((state) => state.profile)
	console.log(profile)
	const dispatch = useDispatch()

	return (
		<div>
			<div>
				{profile.isVisibleProfile && (
					<>
						<p>FirstName: {profile.firstName}</p>
						<p>LastName: {profile.lastName}</p>
						<p>Phone: {profile.phone}</p>
					</>
				)}
				<button onClick={() => dispatch(toggleProfile())}>toggle</button>
			</div>
			<hr />
			<ProfileForm {...profile}/>
			<hr />
		</div>
	)
}