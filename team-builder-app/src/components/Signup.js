import React from 'react';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Button, Container } from 'reactstrap';
import { Formik, Form, Field, yupToFormErrors } from 'formik';
import { NEW_MEMBER } from '../actions'

const SignUp = () => {

	const dispatch = useDispatch();
	const fName = useSelector(state => state.firstName)
	const teamMembers = useSelector(state => state.teamMembers)

	const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

	const SignupSchema = Yup.object().shape({
		firstName: Yup.string()
			.min(2, 'FName Too Short!')
			.max(25, 'FName Too Long!')
			.required('FName Required'),
		lastName: Yup.string()
			.min(2, 'LName Too Short!')
			.max(25, 'LName Too Long!')
			.required('LName Required'),
		email: Yup.string().label('email').email()
			.max(50, 'Please use a valid email')
			.min(4, 'Email is too short to be valid')
            .required('Email required'),
        password: Yup.string().label('password')
            .min(8, 'Password must be at least 8 characters')
            .max(25, 'must be less than 26 characters')
            .required('password required')
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
				console.log("Submit", value)
				dispatch({
					type: NEW_MEMBER,
					payload: value
				})
			}}>

			{({ errors, touched }) => (
				<Form>
					<div>
						<Row>
							{errors.firstName && touched.firstName ? <div>{errors.firstName}</div> : null}
					 	</Row>

						<Row>
							<Col>
								<label htmlFor="name">First Name</label> 
							</Col>

							<Col>
								<Field name='firstName'/>
							</Col>
						</Row>
					</div>
					<div>

						<Row>
					 		{errors.lastName && touched.lastName ? <div>{errors.lastName}</div> : null}
					 	</Row>

						<Row>
							<Col>
								<label htmlFor="name">Last Name</label>
							</Col>

							<Col>
								<Field name='lastName'/>
							</Col>
						</Row>
					</div>
					<div>
						<Row>
					 		{errors.email && touched.email ? <div>{errors.email}</div> : null}
					 	</Row>

						<Row>
							<Col>
								<label htmlFor="email">Email</label> 
							</Col>

							<Col>
								<Field name='email'/>
							</Col>
						</Row>
					</div>
                    <div>
						<Row>
							{errors.password && touched.password ? <div>{errors.password}</div> : null}
					 	</Row>

						<Row>
							<Col>
								<label htmlFor="name">Password</label> 
							</Col>

							<Col>
								<Field type='password' name='password'/>
							</Col>
						</Row>
					</div>

					<Button type='submit' onClick={Formik.handleSubmit}>Sign Up</Button>
				</Form>
			)}</Formik>
		</Container>

    )
}

export default SignUp