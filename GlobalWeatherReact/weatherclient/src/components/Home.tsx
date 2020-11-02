import React from 'react';
import Form from './Form';
import WeatherDetails from './WeatherDetails';
import { Weather } from '../types/Weather';
import { Country } from '../types/Country';
import { City } from '../types/City';

interface IState {
    weather: Weather,
    countries: Country[],
    city?: City
}

class Home extends React.Component {
    public state: IState = {
        weather: {
            error: ""
        } as Weather,
        countries: [],
        city: undefined
    }

    render() {
        return (
            <div className="container content panel">
                <div className="container">
                    <div className="row">
                        <div className="form-container">
                            <WeatherDetails weather={this.state.weather} />
                            <Form countries={this.state.countries} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;