import React from 'react';
import { ListGroup } from 'react-bootstrap';

class WeatherDay extends React.Component {
    render(){
        return (
            <ListGroup.Item> {this.props.description}: {this.props.date} </ListGroup.Item>
        );
    }
}

export default WeatherDay;

