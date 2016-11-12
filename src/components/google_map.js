import React, {PropTypes} from 'react';
import {GoogleMapLoader, GoogleMap} from 'react-google-maps';

const GoogleMapComponent = (props) => {

    return (
        <GoogleMapLoader
            containerElement={
                < div style={{height:'100%'}} />
            }

            googleMapElement={
                < GoogleMap defaultZoom={12}
                            defaultCenter={{
                                lat:props.lat,
                                lng:props.lon
                            }}/>
            }
        />
    );

};

GoogleMapComponent.propTypes = {};
GoogleMapComponent.defaultProps = {};

export default GoogleMapComponent;
