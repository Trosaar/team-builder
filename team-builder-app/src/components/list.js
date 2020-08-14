import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CardColumns } from 'reactstrap';
import ItemCard from  './ItemCard.js'


const List = (props) => {

	const items = useSelector(state => state.items)

	return (
		<CardColumns>
		{ Object.keys(items).map((item) => {
				return (
					<ItemCard item={item} />
	)})}
		</CardColumns>
	)
}

export default List