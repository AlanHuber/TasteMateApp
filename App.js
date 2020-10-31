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
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// importing images and whatever
import Navigation from './components/navigation.js';
import MapView from 'react-native-maps';
import MapComponent from './components/map.js';
import BottomBar from './components/BottomBar.js';
import Filter from './images/filter.png';
import Menu from './images/menu.png';

export default class App extends React.Component {
  render() {
    return (
    <>
    <View style={styles.topFill}>

    </View>
    <Navigation />
      <View style={styles.container}>
        <MapComponent />
      </View>
    <View style={styles.formContain}>
      <Image source={Filter} style={styles.navFilter}/>  
      <TextInput>
        Input your shit
      </TextInput>
      <Image source={Menu} style={styles.navOptions} />
    </View>
    <BottomBar />
    </>
  );
 };
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  topNav: {
    borderWidth: 1,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
  },
  profile: {
    width: "25%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: "50%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cart: {
    width: '25%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleContain: {
    display: "flex",
    flexDirection: 'row',
    backgroundColor: "white",
    padding: 15,
    paddingBottom: 0,
  },
  optionContain: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    borderColor: 'red',
    alignItems: "center",
    justifyContent: "center",
  },
  toggle: {
    width: "30%",
    textAlign: "center",
    padding: 5,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    zIndex: -1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  formContain: {
    borderWidth: 1,
    margin: 15,
    padding: 10,
    backgroundColor: 'white',
  },
  form: {

  },
  formButton: {

  },
  topFill: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 50,
    zIndex: 1,
    backgroundColor: 'white',
  },
  navFilter: {
  },
  navOptions: {
  },
});
