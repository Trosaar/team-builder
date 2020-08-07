import React from 'react';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Button, Container } from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import { NEWITEM } from '../actions'

const FormManager = () => {

	const dispatch = useDispatch();

	const SignupSchema = Yup.object().shape({
		iName: Yup.string().label('first name')
			.min(2, 'First Name Too Short!')
			.max(25, 'First Name Too Long!')
			.required('First Name Required'),
		iDesc: Yup.string().label('last name')
			.min(2, 'Last Name Too Short!')
			.max(25, 'Last Name Too Long!')
			.required('Last Name Required'),
		iPrice: Yup.string().label('email').email()
			.max(50, 'Please use a valid email')
			.min(4, 'Email is too short to be valid')
            .required('Email required'),
	});

		
	return (
		<Container>
			<Formik
			initialValues={{
				iName: '',
				iDesc: '',
				iPrice: '',
			}}
			validationSchema={SignupSchema}
			onSubmit={ value => {
				console.log("Submit", value)
				dispatch({
					type: NEWITEM,
					payload: value
				})
			}}>

			{({ errors, touched }) => (
				<Form>
					<div>
						<Row>
							{errors.iName && touched.iName ? <div>{errors.iName}</div> : null}
					 	</Row>

						<Row>
							<Col>
								<label htmlFor="name">Item Name</label> 
							</Col>

							<Col>
								<Field name='iName'/>
							</Col>
						</Row>
					</div>
					<div>

						<Row>
					 		{errors.iDesc && touched.iDesc ? <div>{errors.iDesc}</div> : null}
					 	</Row>

						<Row>
							<Col>
								<label htmlFor="name">Item Description</label>
							</Col>

							<Col>
								<Field name='iDesc'/>
							</Col>
						</Row>
					</div>
					<div>
						<Row>
					 		{errors.iPrice && touched.iPrice ? <div>{errors.iPrice}</div> : null}
					 	</Row>

						<Row>
							<Col>
								<label htmlFor="iPrice">Item Price</label> 
							</Col>

							<Col>
								<Field name='iPrice'/>
							</Col>
						</Row>
					</div>

					<Button type='submit' onClick={Formik.handleSubmit}>Sign Up</Button>
				</Form>
			)}</Formik>
		</Container>
	)
}

export default FormManager