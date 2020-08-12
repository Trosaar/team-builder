import {
	LOGIN_TRY, LOGIN_SUCCESS, LOGIN_FAIL,
	REGISTERING, LOGOUT,
	NEW_MEMBER,
	NEWITEM
} from "../actions"

const initialState = {
	teamMembers: {},
	items: {},
	loggedIn: false,
	loggingIn: false,
	registeringUser: false,
	updatingUser: false,
	deletingUser: false,
	updatingItem: false,
	deletingItem: false,
	error: null
}

export default (state = initialState, action) => {
	switch(action.type) {
		case REGISTERING: {
			const NewMember = {
				...state.teamMembers,
				[Object.keys(state.teamMembers).length]: {
					firstName: action.payload.firstName,
					lastName: action.payload.lastName,
					email: action.payload.email
				}
			}

			return {
				...state,
				teamMembers: NewMember,
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
		case NEWITEM: {
			const NewItem = {
				...state.items,
				[Object.keys(state.items).length]: {
					iName: action.payload.iName,
					iDesc: action.payload.iDesc,
					iPrice: action.payload.iPrice
				}
			}
			
			return {
				...state,
				items: NewItem
			}
		}
		default: {
			return state
		}
	}
}