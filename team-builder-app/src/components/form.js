import React from 'react';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Button, Container } from 'reactstrap';
import { Formik, Form, useFormik, Field } from 'formik';
import { TEST } from '../actions'

const FormManager = () => {

	const dispatch = useDispatch();
	const fName = useSelector(state => state.firstName)
	const teamMembers = useSelector(state => state.teamMembers)

	const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

	const SignupSchema = Yup.object().shape({
		firstName: Yup.string()
			.min(2, 'FName Too Short!')
			.max(50, 'FName Too Long!')
			.required('FName Required'),
		lastName: Yup.string()
			.min(2, 'LName Too Short!')
			.max(50, 'LName Too Long!')
			.required('LName Required'),
		});
		
	return (
		<Container>
			<Formik
			initialValues={{
				firstName: '',
				lastName: '',
				email: '',
			}}
			validationSchema={SignupSchema}
			onSubmit={ value => {
				console.log(value)
				dispatch({
					type: TEST,
					payload: value
				})
			}}>

			{({ errors, touched }) => (
				<Form>
					<div>
						<Row>
					 		{errors.firstName ? console.log(errors) : <div>{errors.firstName}</div>}
					 	</Row>

					<Row>
						<Col>
							<label htmlFor="name">First Name </label> 
						</Col>
						<Col>
							<Field 
								id='firstName'
								name='firstName'
								onChange={Formik.handleChange}
								value={Formik.firstName} />
						</Col>
					</Row>
				</div>
				<div id="LastName">

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
								value={Formik.lastName} />
						</Col>
					</Row>
				</div>
				<Button type='submit' onClick={Formik.handleSubmit}>Submit</Button>
				</Form>
			)}</Formik>
		</Container>

	)

	const validate = (values, props /* only available when using withFormik */) => {

		// return sleep(1000).then(() => {
		// 	const errors = {};

		// 	if (!values.firstName) {
		// 		errors.firstName = 'Required';
		// 	} else if (values.firstName.length > 15) {
		// 		errors.firstName = 'Must be 15 characters or less';
		// 	}

		// 	if (!values.lastName) {
		// 		errors.lastName = 'Required';
		// 	} else if (values.lastName.length > 15) {
		// 		errors.lastName = 'Must be 15 characters or less';
		// 	}

		// 	return errors;
		// });
	};

	// const Formik = useFormik({
	// 	initialValues: {
	// 		firstName: fName,
	// 		lastName: '',
	// 		email: '',
	// 	},
	// 	validate,
	// 	onSubmit: value => {
	// 		dispatch({
	// 			type: TEST,
	// 			payload: value
	// 		})
	// 	},
	// })

	// return (
	// 	<form onSubmit={Formik.handleSubmit}>
			// <div>
			// 	<Row>
			// 		{Formik.errors.firstName ? <div>{Formik.errors.firstName}</div> : null}
			// 	</Row>

			// 	<Row>
			// 		<Col>
			// 			<label htmlFor="name">First Name </label> 
			// 		</Col>
			// 		<Col>
			// 			<input 
			// 				id='firstName'
			// 				name='firstName'
			// 				type='text'
			// 				onChange={Formik.handleChange}
			// 				value={Formik.values.firstName} />
			// 		</Col>
			// 	</Row>
			// </div>
			// <div id="LastName">
			// 	<Row>
			// 		{Formik.errors.lastName ? <div>{Formik.errors.lastName}</div> : null}
			// 	</Row>

			// 	<Row>
			// 		<Col>
			// 			<label htmlFor="name">Last Name </label> 
			// 		</Col>
			// 		<Col>
			// 			<input 
			// 				id='lastName'
			// 				name='lastName'
			// 				type='text'
			// 				onChange={Formik.handleChange}
			// 				value={Formik.values.lastName} />
			// 		</Col>
			// 	</Row>
			// </div>


			// <Button type='submit' onClick={Formik.handleSubmit}>Submit</Button>
	// 	</form>
	// )
}

export default FormManager