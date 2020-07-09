import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button } from 'reactstrap';
import { useFormik } from 'formik';
import { TEST } from '../actions'

const FormManager = () => {

	const dispatch = useDispatch();
	const fName = useSelector(state => state.firstName)
	const teamMembers = useSelector(state => state.teamMembers)

	const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

	const validate = (values, props /* only available when using withFormik */) => {
		return sleep(1000).then(() => {
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
			dispatch({
				type: TEST,
				payload: value
			})
		},
	})


	return (
		<form onSubmit={Formik.handleSubmit}>
			<Row>
				<Row>
					{Formik.errors.firstName ? <div>{Formik.errors.firstName}</div> : null}
				</Row>

				<Row>
					<label htmlFor="name">First Name </label> 

					<input 
						id='firstName'
						name='firstName'
						type='text'
						onChange={Formik.handleChange}
						value={Formik.values.firstName} />
				</Row>
			</Row>
			<Row id="LastName">
				<Row>
					{Formik.errors.lastName ? <div>{Formik.errors.lastName}</div> : null}
				</Row>

				<Row>
					<Col>
						<label htmlFor="name">Last Name </label> 
					</Col>
					<Col>
						<input 
							id='lastName'
							name='lastName'
							type='text'
							onChange={Formik.handleChange}
							value={Formik.values.lastName} />
					</Col>
				</Row>
			</Row>


			<Button 
			type='submit' 
			onClick={Formik.handleSubmit}>Submit</Button>
		</form>
	)
}

export default FormManager