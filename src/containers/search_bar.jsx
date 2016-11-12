import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onFormSubmit(e) {
        e.preventDefault();
        console.log('this.props',this.props);
        
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    onInputChange(e) {
        console.log(e.target.value);
        this.setState({term: e.target.value})
    }

    render() {
        return (
            <form className="input-group"
                  onSubmit={this.onFormSubmit}>
                <input type="text"
                       placeholder='Get 5 day forecast in your city'
                       className="form-control"
                       value={this.state.term}
                       onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

SearchBar.propTypes = {};
SearchBar.defaultProps = {};

export default connect(null, mapDispatchToProps)(SearchBar);
