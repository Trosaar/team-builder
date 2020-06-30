import {
	LOGIN_TRY, LOGIN_SUCCESS, LOGIN_FAIL,
	REGISTERING, LOGOUT,
	TEST
} from "../actions"

const initialState = {
	firstName: "",
	loggedIn: false,
	loggingIn: false,
	registering: false,
	updating: false,
	deleting: false,
	error: null
}

export default (state = initialState, action) => {
	switch(action.type) {
		case REGISTERING: {
			return {
				...state,
				return: true,
				error: null
			}
		}
		case LOGIN_TRY: {
			return {
				...state,
				loggingIn: true,
				error: false
			}
		}
		case LOGIN_SUCCESS: {
			return {
				...state,
				loggingIn: false,
				error: false
			}
		}
		case LOGIN_FAIL: {
			return {
				...state,
				loggingIn: false,
				error: action.payload
			}
		}
		case LOGOUT: {
			return {
				...state,
				loggedIn: false
			}
		}
		case TEST: {
			return {
				...state,
				firstName: action.payload.firstName
			}
		}
		default: {
			return state
		}
	}
}