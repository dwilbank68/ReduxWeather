import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         'whatever':{}
    //     }
    //    this.handleClick = this.handleClick.bind(this)
    // }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th> <th>Temperature (K)</th> <th>Pressure (hpa)</th> <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const {lat, lon} = cityData.city.coord;
        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td> <Chart data={temps} color="orange" units="K"/> </td>
                <td> <Chart data={pressures} color="green" units="hPa"/> </td>
                <td> <Chart data={humidities} color="black" units="%"/> </td>
            </tr>
        )
    }

}

WeatherList.propTypes = {};
WeatherList.defaultProps = {};

function mapStateToProps({weather}) {
    return {weather}
}

export default connect(mapStateToProps)(WeatherList);

// remember to use 'this' binding now (choose one, #1 is best)
// 1. In constructor (see constructor above)
// 2. .bind(this) in your render ( onClick={this.onClick.bind(this)} )
// 3. Arrow functions in your render ( onClick={() => {}} )
