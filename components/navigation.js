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

import CartIcon from '../images/cart.png';
import Filter from '../images/filter.png';
import Icon from '../images/icon.png';
import Menu from '../images/menu.png';
import NotificationPlacer from '../images/notification.png';
import Pin from '../images/pin.png';
import ProfilePlaceholder from '../images/profilePlaceholder.png';
import Rss from '../images/rss.png';
import Star from '../images/star.png';

const Navigation: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.topNav}>
          <View style={styles.header}>
            <View style={styles.profile}>
              <Image source={ProfilePlaceholder} />
            </View>
            <View style={styles.icon}>
              <Image source={Icon} />
            </View>
            <View style={styles.cart}>
              <Image source={CartIcon} />
            </View>
          </View>
          <View style={styles.toggleContain}>
            <View style={styles.optionContain}>
              <Text style={styles.toggle}>Map</Text>
              <Text style={styles.toggle}>Recommended</Text>
            </View>
          </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  topNav: {
    zIndex: 5,
    position: 'relative',
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
    alignItems: "center",
    justifyContent: "center",
  },
  toggle: {
    width: "30%",
    textAlign: "center",
    padding: 5,
  },
});


export default Navigation;
