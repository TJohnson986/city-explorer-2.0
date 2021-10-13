import React from 'react';
import './App.css';
import { Form, Jumbotron } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      cityData: {},
      movieData: [],
      weatherData: []
    }
  }

  handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`)
      let wantedCity = cityData.data[0];
      this.setState({
        cityData: wantedCity
      });
    } catch (err) {
      this.setState({ error: `${err.message}: ${err.response.data.error}`});
    }
    this.getWeatherData();
    this.getMovieData();
  };

  

  render() {
    return (
      <>
        <h1>City Explorer!</h1>
        <Form className="form" onSubmit={this.handleFormSubmit}>
          <Form.Group controlId="city">
            <Form.Label>Enter the name of the city that you would like to explore</Form.Label>
            <Form.Control value={this.state.city} onInput={e => this.setState({ city: e.target.value })}></Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">Explore!</Button>
        </Form>
        {this.state.error ?
          <Alert variant="warning">
            {this.state.error}
          </Alert> : ''}
        {this.state.cityData.lat ?
          <>
            <Jumbotron className="jumbotron">
              <h3>{this.state.cityData.display_name}</h3>
              <h5>{this.state.cityData.lat}, {this.state.cityData.lon}</h5>
              <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=13`} alt={`Map of ${this.state.cityData.display_name}`} />
            </Jumbotron>
            {/* <Weather weatherData={this.state.weatherData} /> */}
            {/* <Movies movieData={this.state.movieData} /> */}
          </>
          : ''}
      </>
    )
  }
}

export default App;
