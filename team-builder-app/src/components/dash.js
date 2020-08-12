import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Button, Form } from 'reactstrap';
import { useFormik } from 'formik';
import { TEST } from '../actions';
import FormManager from  './form.js'
import List from './list.js'

const Dashboard = () => {

	const loggedIn = useSelector(state => state.loggedIn)
	const history = useHistory()

	if (!loggedIn) {
		return (
			<Container>
				<List />
				<FormManager />
			</Container>
		)
	} else {
		return(
			<span>You must log in first</span>
		)
	}
}

export default Dashboard