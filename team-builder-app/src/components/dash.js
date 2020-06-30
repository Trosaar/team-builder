import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button } from 'reactstrap';
import { useFormik } from 'formik';
import { TEST } from '../actions'

const Dashboard = () => {

	const dispatch = useDispatch();
	const error = useSelector(state => state.error)
	const fName = useSelector(state => state.firstName)


	const Formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
		},
		onSubmit: value => {
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
					<form onSubmit={Formik.handleSubmit}>
						<label htmlFor="name">First Name</label>
						<input id='firstName' name='firstName' type='text' onChange={Formik.handleChange} value={Formik.values.firstName} />
						<Button type='submit' onClick={Formik.handleSubmit}>Submit</Button>
					</form>
				</Row>
			</Col>
		</Container>
	)
}

export default Dashboard