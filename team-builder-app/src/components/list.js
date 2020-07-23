import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button, Form } from 'reactstrap';

const List = (props) => {

	const teamMembers = useSelector(state => state.teamMembers)

	console.log(teamMembers);

	if (Object.keys(teamMembers).length > 0){
		Object.keys(teamMembers).map((member) => {
				console.log("each member: ",teamMembers[member])
			})
		}

	return (
		<Container>List</Container>
	)
}

export default List