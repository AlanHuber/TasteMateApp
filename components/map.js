import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MapView from 'react-native-maps';

function getInitialState() {
  return {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };
}

function onRegionChange(region) {
  this.setState({ region });
}

const Map: () => React$Node = () => {
  return (
    <>
    <MapView
          region={this.state.region}
          onRegionChange={this.onRegionChange}
        />
    </>
  );
};

const styles = StyleSheet.create({

});


export default Map;
