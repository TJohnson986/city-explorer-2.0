import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class SingleMovie extends React.Component {
    render(){
        return(
            <ListGroup.Item> {this.props.title}: {this.props.overview}</ListGroup.Item>
        )
    }
}

export default SingleMovie