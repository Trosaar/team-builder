import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const ItemCard = (props) => {
    const items = useSelector(state => state.items)

    return (
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} outline color="danger">
            <CardBody>
                <CardTitle>{items[props.item].iName}</CardTitle>
                <CardSubtitle>{items[props.item].iPrice}</CardSubtitle>
                <CardText>{items[props.item].iDesc}</CardText>
                <Button>Button</Button>
            </CardBody>
        </Card>
    )
}

export default ItemCard