import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button } from 'reactstrap';
import { useFormik } from 'formik';
import { TEST } from '../actions'

const Dashboard = () => {

	const dispatch = useDispatch();
	// const error = useSelector(state => state.error)
	const fName = useSelector(state => state.firstName)
	const teamMembers = useSelector(state => state.teamMembers)

	const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

	const validate = (values, props /* only available when using withFormik */) => {
		return sleep(100).then(() => {
			const errors = {};

			if (!values.firstName) {
				errors.firstName = 'Required';
			} else if (values.firstName.length > 15) {
				errors.firstName = 'Must be 15 characters or less';
			}

			return errors;
		});
	};

	const Formik = useFormik({
		initialValues: {
			firstName: fName,
			lastName: '',
			email: '',
		},
		validate,
		onSubmit: value => {
			// const len = Object.keys(teamMembers).length
			
			// const updatedTeam = {
			// 	...teamMembers,
			// 	[len]: {
			// 		firstName: value.firstName
			// 	}
			// }

			dispatch({
				type: TEST,
				payload: value
			})
		},
	})

	return (
		<Container>
			<Col>
				<Row>
					{Formik.errors.firstName ? <div>{Formik.errors.firstName}</div> : null}
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