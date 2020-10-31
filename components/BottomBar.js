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
import ExploreIcon from '../images/pin.png';
import RssIcon from '../images/rss.png';
import StarIcon from '../images/star.png';
import NotificationIcon from '../images/notification.png';

export default class BottomBar extends React.Component {
  render(){
    return (
        <View style={styles.BarContainer}>
          <View style={styles.flex}>
            <Image source={ExploreIcon} />
          </View>
          <View style={styles.flex}>
            <Image source={RssIcon} />
          </View>
          <View style={styles.flex}>
            <Image source={StarIcon} />
          </View>
          <View style={styles.flex}>
            <Image source={NotificationIcon} />
          </View>
        </View>
    );
  };
};

const styles = StyleSheet.create({
  BarContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    height: 75,
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  flex: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
});
