import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button, Form } from 'reactstrap';

const List = (props) => {

	const teamMembers = useSelector(state => state.teamMembers)

	console.log(teamMembers);


	return (
		<Container>
		{ Object.keys(teamMembers).map((member) => {
				return (
					<p>{`${teamMembers[member]["firstName"]} ${teamMembers[member]["lastName"]}`}</p>
	)})}
		</Container>
	)
}

export default List