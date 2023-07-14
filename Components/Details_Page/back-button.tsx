import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
const Back_Button = () => {
  return (
    <View style={styles.imagecontainer}>
      <Image style={styles.image} source={require('../../assets/image.png')} />
      <TouchableOpacity>
        <Icon style={styles.back} name="arrow-left" color="#fff" size={15} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp('105%'),
    backgroundColor: '#201520',
  },
  imagecontainer: {
    padding: '2%',
    alignItems: 'center',
  },
  image: {
    marginTop: '2%',
    position: 'absolute',
    width: wp('85%'),
    height: wp('108%'),
  },
  back: {
    top: '50%',
    right: '35%',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'rgba(1,1,0,0.6)',
  },
});

export default Back_Button;