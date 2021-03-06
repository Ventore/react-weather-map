import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google-map'

class WeatherList extends Component {
    renderWeather(cityData) {
        
        const temperatures = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;
        return (
            <tr key={cityData.city.id}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td><Chart color="orange" data={temperatures} units="℃"/></td>
                <td><Chart color="green" data={pressures} units="hPa"/></td>
                <td><Chart color="blue" data={humidity} units="%" /></td>
            </tr>  
        );
    }
    
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (℃)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);