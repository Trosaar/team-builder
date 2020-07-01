import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button } from 'reactstrap';
import { useFormik } from 'formik';
import { TEST } from '../actions'

const Dashboard = () => {

	const dispatch = useDispatch();
	const error = useSelector(state => state.error)
	const fName = useSelector(state => state.firstName)
	const teamMembers = useSelector(state => state.teamMembers)

	const Formik = useFormik({
		initialValues: {
			firstName: fName,
			lastName: '',
			email: '',
		},
		onSubmit: value => {
			const len = Object.keys(teamMembers).length

			console.log(len)
			console.log("team", teamMembers);

			teamMembers.push({
				userId: len,
				firstName: value
			})

			console.log("team", teamMembers);
			

			dispatch({
				type: TEST,
				payload: teamMembers
			})
		},
	})

	return (
		<Container>
			<Col>
				<Row>
					 
				</Row>
				<Row>
					<form onSubmit={Formik.handleSubmit}>
						<label htmlFor="name">First Name </label>
						<input id='firstName' name='firstName' type='text' onChange={Formik.handleChange} value={Formik.values.firstName} />
						<Button type='submit' onClick={Formik.handleSubmit}>Submit</Button>
					</form>
				</Row>
			</Col>
		</Container>
	)
}

export default Dashboard