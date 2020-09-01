import React from 'react';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { Segment, Button, Container } from 'semantic-ui-react';
import { Formik, Form, Field } from 'formik';
import { REGISTERING } from '../actions'

const SignUp = () => {

	const dispatch = useDispatch();

	const SignupSchema = Yup.object().shape({
		firstName: Yup.string().label('first name')
			.min(2, 'First Name Too Short!')
			.max(25, 'First Name Too Long!')
			.required('First Name Required'),
		lastName: Yup.string().label('last name')
			.min(2, 'Last Name Too Short!')
			.max(25, 'Last Name Too Long!')
			.required('Last Name Required'),
		email: Yup.string().label('email').email()
			.max(50, 'Please use a valid email')
			.min(4, 'Email is too short to be valid')
            .required('Email required'),
        password: Yup.string().label('password')
            .min(8, 'Password must be at least 8 characters')
            .max(25, 'must be less than 26 characters')
            .required('Password Required')
        });
		
	return (
		<Container>
			<Formik
			initialValues={{
				firstName: '',
				lastName: '',
				email: '',
				password: '',
			}}
			validationSchema={SignupSchema}
			onSubmit={ value => {
				console.log("Submit", value)
				dispatch({
					type: REGISTERING,
					payload: value
				})
				value.target.reset()
				// axios.post
			}}>

			{({ errors, touched }) => (
				<Form>
					<Segment.Group>
						<Segment>
							{errors.firstName && touched.firstName ? <div>{errors.firstName}</div> : null}
					 	</Segment>

						<Segment.Group>
							<Segment>
								<label htmlFor="name">First Name</label> 
							</Segment>

							<Segment>
								<Field name='firstName'/>
							</Segment>
						</Segment.Group>
					</Segment.Group>
					<Segment.Group>

						<Segment>
					 		{errors.lastName && touched.lastName ? <div>{errors.lastName}</div> : null}
					 	</Segment>

						<Segment.Group>
							<Segment>
								<label htmlFor="name">Last Name</label>
							</Segment>

							<Segment>
								<Field name='lastName'/>
							</Segment>
						</Segment.Group>
					</Segment.Group>
					
					<Segment.Group>
						<Segment>
					 		{errors.email && touched.email ? <div>{errors.email}</div> : null}
					 	</Segment>

						<Segment.Group>
							<Segment>
								<label htmlFor="email">Email</label> 
							</Segment>

							<Segment>
								<Field name='email'/>
							</Segment>
						</Segment.Group>
					</Segment.Group>
					
                    <Segment.Group>
						<Segment>
							{errors.password && touched.password ? <div>{errors.password}</div> : null}
					 	</Segment>

						<Segment.Group>
							<Segment>
								<label htmlFor="name">Password</label> 
							</Segment>

							<Segment>
								<Field type='password' name='password'/>
							</Segment>
						</Segment.Group>
					</Segment.Group>

					<Button type='submit' onClick={Formik.handleSubmit}>Sign Up</Button>
				</Form>
			)}</Formik>
		</Container>
    )
}

export default SignUp