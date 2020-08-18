import React from 'react';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { Segment, Button, Container, Input, Form } from 'semantic-ui-react';
import { Formik, Form as FForm} from 'formik';
import { NEWITEM } from '../actions'

const FormManager = () => {

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
				<FForm>
					<Segment.Group>
						<Segment>
							{errors.iName && touched.iName ? <div>{errors.iName}</div> : null}
					 	</Segment>

						<Segment.group>
							<Form.Field
								error='Please give a name for your item'
								id='form-input-control-item-name'
								control={Input}
								label='Item name'
								placeholder='Item name'
							/>						
						</Segment.group>
					</Segment.Group>
					<Segment.Group>

						<Segment>
					 		{errors.iDesc && touched.iDesc ? <div>{errors.iDesc}</div> : null}
					 	</Segment>

						<Segment.Group>
							<Form.Field
								id='form-input-control-item-desc'
								control={Input}
								label='Item description'
								placeholder='Item description'
							/>						
						</Segment.Group>
					</Segment.Group>
					<Segment.Group>
						<Segment>
					 		{errors.iPrice && touched.iPrice ? <div>{errors.iPrice}</div> : null}
					 	</Segment>

						<Segment.Group>
							<Form.Field
								id='form-input-control-item-price'
								control={Input}
								label='Item price'
								placeholder='Item price'
							/>						
						</Segment.Group>
					</Segment.Group>

					<Button type='submit' onClick={Formik.handleSubmit}>Sign Up</Button>
				</FForm>
			)}</Formik>
		</Container>
	)
}

export default FormManager