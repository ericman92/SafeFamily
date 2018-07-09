import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Styling/Locate.css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    constructor(){
        super()
            this.state ={
                lat: 0,
                lng: 0
            }
    }

    static defaultProps = {
        center: {
            lat: 40.742959,
            lng: -73.941921
        },
        zoom: 12
    };

    render() {

        return (
            // Important! Always set the container height explicitly
            <div className = 'pin' style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        className="pin"
                        lat={40.731166}
                        lng={-73.951434}
                        text={'📍'}
                    />

                    <AnyReactComponent
                        className="pin"                    
                        lat={40.7429595}
                        lng={-73.9441155}
                        text={'📍'}
                    />

                    <AnyReactComponent
                        className="pin"                        
                        lat={40.756961}
                        lng={-73.990275}
                        text={'📍'}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;