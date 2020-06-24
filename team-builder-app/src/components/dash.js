import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Button } from 'reactstrap';
import { useFormik } from 'formik';

const Dashboard = () => {

	const Formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
		},
		onsubmit: value => {
			alert(JSON.stringify(value, null, 2))
		},
	})

	return (
		<Container>
			<Col>
				<Row>
					<form onSubmit={Formik.handleSubmit}>
						<label htmlFor="name">Name</label>
						<input id='name' name='name' type='text' onChange={Formik.handleChange} value={Formik.values.name} />
						<Button type='reset' onClick={Formik.handleReset}>Reset</Button>
					</form>
				</Row>
			</Col>
		</Container>
	)
}

export default Dashboard