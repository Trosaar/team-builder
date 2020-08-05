import {
	LOGIN_TRY, LOGIN_SUCCESS, LOGIN_FAIL,
	REGISTERING, LOGOUT,
	NEW_MEMBER
} from "../actions"

const initialState = {
	teamMembers: {},
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
			const updatedTeam = {
				...state.teamMembers,
				[Object.keys(state.teamMembers).length]: {
					firstName: action.payload.firstName,
					lastName: action.payload.lastName
				}
			}

			return {
				...state,
				teamMembers: updatedTeam,
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
		default: {
			return state
		}
	}
}