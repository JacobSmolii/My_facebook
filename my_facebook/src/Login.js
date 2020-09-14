import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
	const [{ }, dispatch] = useStateValue();

	const signIn = () => {
		auth.signInWithPopup(provider)
			.then(result => {
				// console.log('login', result)
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user
				})
			})
			.catch(e => alert(e.message))
	}

	return (
		<div className="login">
			<div className="login_logo">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="" />
				<img src="https://i.pinimg.com/600x315/80/84/c1/8084c17c81906d873771266f42e1545e.jpg" alt="" />
			</div>
			<Button
				type="submit"
				onClick={signIn}
			>
				Sign In
			</Button>
		</div>
	)
}

export default Login
