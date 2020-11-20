import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MapView from 'react-native-maps';


onRegionChange = (region) => {
  this.setState({ region });
}

export default class Map extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 40.78825,
        longitude: -122.4324,
        latitudeDelta: 1.0922,
        longitudeDelta: 1.0421,
      },
    };
  }

  render(){
  return (
    <MapView style={styles.mapStyle} region={this.state.region} />
   );
 };
};

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
