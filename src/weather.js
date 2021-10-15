import React from 'react';
import { ListGroup } from 'react-bootstrap';
import WeatherDay from './WeatherDay';

class Weather extends React.Component {
    render() {
        const allWeatherListGroups = this.props.weatherData.map((day, index) => (
            <WeatherDay key={index} description={day.description} date={day.date} />
        ))
        return (
            <ListGroup>
                {allWeatherListGroups}
            </ListGroup>
        );
    }
}

export default Weather;
