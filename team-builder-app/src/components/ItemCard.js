import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from 'semantic-ui-react';

const ItemCard = (props) => {
    const items = useSelector(state => state.items)

    return (
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} outline color="danger">
            <Card.Header>{items[props.item].iName}</Card.Header>
            <Card.Content>{items[props.item].iPrice}</Card.Content>
            <Card.Description>{items[props.item].iDesc}</Card.Description>
            <Button>Button</Button>
        </Card>
    )
}

export default ItemCard