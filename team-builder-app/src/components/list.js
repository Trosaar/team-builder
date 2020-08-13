import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button, Form } from 'reactstrap';

const List = (props) => {

	const items = useSelector(state => state.items)

	console.log(items);


	return (
		<Container>
		{ Object.keys(items).map((item) => {
				return (
					<p>{`${items[item]["iName"]} ${items[item]["iDesc"]} and costs $${items[item]["iPrice"]}`}</p>
	)})}
		</Container>
	)
}

export default List