import React from 'react';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { Segment, Button, Container, Message } from 'semantic-ui-react';
import { Formik, Form, Field } from 'formik';
import { NEWITEM } from '../actions'

const AddItem = () => {

	const dispatch = useDispatch();

	const SignupSchema = Yup.object().shape({
		iName: Yup.string().label('name')
			.min(2, 'Item name is too short')
			.max(25, 'Item name is too long')
			.required('Each item must have a name'),
		iDesc: Yup.string().label('description')
			.min(3, 'Descrptions must have more detail')
			.max(250, 'Must be under 250 characters')
			.required('Each item needs a description'),
		iPrice: Yup.number().label('price')
			.max(9999.99, 'Price is too large')
			.min(1, 'Each item needs a price')
            .required('Please add a price for this item'),
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
					<Segment.Group>
						<Segment>
							{errors.iName && touched.iName ? <Message negative color='red'>{errors.iName}</Message> : null}
					 	</Segment>

						<Segment.Group>
							<Segment>
								<label htmlFor="name">Item Name</label> 
							</Segment>

							<Segment>
								<Field name='iName'/>
							</Segment>
						</Segment.Group>
					</Segment.Group>
					<Segment.Group>

						<Segment>
					 		{errors.iDesc && touched.iDesc ? <div>{errors.iDesc}</div> : null}
					 	</Segment>

						<Segment.Group>
							<Segment>
								<label htmlFor="name">Item Description</label>
							</Segment>

							<Segment>
								<Field name='iDesc'/>
							</Segment>
						</Segment.Group>
					</Segment.Group>
					<Segment.Group>
						<Segment>
					 		{errors.iPrice && touched.iPrice ? <div>{errors.iPrice}</div> : null}
					 	</Segment>

						<Segment.Group>
							<Segment>
								<label htmlFor="iPrice">Item Price</label> 
							</Segment>

							<Segment>
								<Field name='iPrice'/>
							</Segment>
						</Segment.Group>
					</Segment.Group>

					<Button type='submit' onClick={Formik.handleSubmit}>Sign Up</Button>
				</Form>
			)}</Formik>
		</Container>
	)
}

export default AddItem