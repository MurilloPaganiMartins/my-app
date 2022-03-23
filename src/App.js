import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Modal from "./modal";
import BigButton from "./button";
const mapStyles = {
  width: '100%',
  height: '100%'
};

class Demo1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      center: [-28.940580, -49.477940],
      show: false,
      test: false
    };
  }




  _onChange = ({ center, zoom }) => {
    this.setState({
      center: center,
      zoom: zoom,
    });
  }

  componentDidMount() {
    setTimeout(() => { this.setState({ test: !this.state.test }) }, 10000);
    navigator.geolocation.getCurrentPosition(
      pos => {
        this.setState({
          center: {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          }
        });
      }
    )
  }


  componentDidUpdate() {
    navigator.geolocation.getCurrentPosition(
      pos => {
        this.setState({
          center: {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          }
        });
      }
    )
  }

  onMarkerClick = e => {
    this.setState({
      show: !this.state.show
    });
  };

  /*
    onMouseoverMarker(props, marker, e) {
      alert("Eu sou um alert!");
    }
  */

  render() {
    const { google } = this.props;
    let button;
    let testing;

    if (!this.state.show) {
      button = <BigButton onClose={this.onMarkerClick} show={this.state.show} />;
    } else {
      button = null;
    }

    if (!this.state.test) {
      testing = <Marker
        onClick={this.onMarkerClick}
        onMouseover={this.onMouseoverMarker}
        name={'Current location'}
        position={{ lat: -28.931280, lng: -49.422140 }}
        icon={{
          url: "https://imgkub.com/images/2022/03/20/coleta_WB.png",
          anchor: new google.maps.Point(32, 32),
          scaledSize: new google.maps.Size(30, 30)
        }}
      />
    } else {
      testing = null;
    }

    return (
      <div>
        <Map
          className={'map'}
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          onChange={this._onChange}
          center={this.state.center}
        >
          <Marker
            onMouseover={this.onMouseoverMarker}
            position={{ lat: this.state.center.lat, lng: this.state.center.lng }}
            icon={{
              url: "https://imgkub.com/images/2022/03/20/pessoa_WB.png",
              anchor: new google.maps.Point(32, 32),
              scaledSize: new google.maps.Size(30, 30)
            }}
          />

          {testing}

          <Marker
            onClick={this.onMarkerClick}
            onMouseover={this.onMouseoverMarker}
            name={'Current location'}
            position={{ lat: -28.930480, lng: -49.472340 }}
            icon={{
              url: "https://imgkub.com/images/2022/03/20/coleta_WB.png",
              anchor: new google.maps.Point(32, 32),
              scaledSize: new google.maps.Size(30, 30)
            }}
          />


          <Marker
            onClick={this.onMarkerClick}
            onMouseover={this.onMouseoverMarker}
            name={'Current location'}

            position={{ lat: -28.930580, lng: -49.412940 }}

            icon={{
              url: "https://imgkub.com/images/2022/03/20/entrega_WB.png",
              anchor: new google.maps.Point(32, 32),
              scaledSize: new google.maps.Size(30, 30)
            }}
          />

          <Marker
            onClick={this.onMarkerClick}
            onMouseover={this.onMouseoverMarker}
            name={'Current location'}

            position={{ lat: -28.930510, lng: -49.432940 }}

            icon={{
              url: "https://imgkub.com/images/2022/03/20/entrega_WB.png",
              anchor: new google.maps.Point(32, 32),
              scaledSize: new google.maps.Size(30, 30)
            }}
          />


        </Map>


        <Modal onClose={this.onMarkerClick} show={this.state.show}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
          deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non
          fuga omnis a sed impedit explicabo accusantium nihil doloremque
          consequuntur.
        </Modal>


        {button}

      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDQISO3k52QEUZ_tQ3zsM6gbX5p4UlvirI'
})(Demo1);