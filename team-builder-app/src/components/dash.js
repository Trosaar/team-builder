import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { useFormik } from 'formik';
import List from './list.js'

const Dashboard = () => {

	const loggedIn = useSelector(state => state.loggedIn)
	const history = useHistory()

	if (!loggedIn) {
		return (
			<Container>
				<List />
			</Container>
		)
	} else {
		return(
			<span>You must log in first</span>
		)
	}
}

export default Dashboard