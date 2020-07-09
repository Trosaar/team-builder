import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button, Form } from 'reactstrap';
import { useFormik } from 'formik';
import { TEST } from '../actions';
import FormManager from  './form.js'
import List from './list.js'

const Dashboard = () => {
	return (
		<Container>
			<List/>
			<FormManager />
		</Container>
	)
}

export default Dashboard