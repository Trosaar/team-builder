import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'semantic-ui-react';
import ItemCard from  './ItemCard.js';

const List = (props) => {

	const items = useSelector(state => state.items)

	return (
		<Container>
		{ Object.keys(items).map((item) => {
				return (
					<ItemCard item={item} />
	)})}
		</Container>
	)
}

export default List