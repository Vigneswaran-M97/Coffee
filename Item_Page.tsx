import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Item_page = () => {
  const data = [
    {
      id: 1,
      name: 'Cinnamon & Cocoa',
      price: '₹99',
      image: require('./assets/Item1.png'),
    },
    {
      id: 2,
      name: 'Drizzled with Caramel',
      price: '₹199',
      image: require('./assets/Item2.png'),
    },
    {
      id: 3,
      name: 'Bursting Blueberry',
      price: '₹249',
      image: require('./assets/Item3.png'),
    },
    {
      id: 4,
      name: 'Dalgona Whipped Macha',
      price: '₹299',
      image: require('./assets/Item4.png'),
    },

    {
      id: 5,
      name: 'Cinnamon & Cocoa',
      price: '₹99',
      image: require('./assets/Item1.png'),
    },
    {
      id: 6,
      name: 'Drizzled with Caramel',
      price: '₹199',
      image: require('./assets/Item2.png'),
    },
    {
      id: 7,
      name: 'Bursting Blueberry',
      price: '₹249',
      image: require('./assets/Item3.png'),
    },
    {
      id: 8,
      name: 'Dalgona Whipped Macha',
      price: '₹299',
      image: require('./assets/Item4.png'),
    },
  ];
  return (
    <SafeAreaView style={Styles.mainheader}>
      <View style={Styles.header}>
        <View style={Styles.subheader}>
          <Text style={Styles.heading1}>Br.Bean</Text>
          <Text style={Styles.heading2}>Coffee</Text>
        </View>
        <View style={Styles.headericon}>
          <View style={Styles.icon}>
            <TouchableOpacity>
              <Image
                style={Styles.images}
                source={require('./assets/Profile.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={Styles.textinputcontainer}>
        <View style={Styles.textinputicon}>
          <Icon
          style = {Styles.searchicon}
            name="search"
            color={'#EFE3C8'}
            size={20}
          />
        </View>
        <View style={Styles.textinput}>
          <TextInput 
            style={Styles.text}
            placeholder="Browse your favourite coffee..."
            placeholderTextColor={'#EFE3C8'}
          />
        </View>
      </View>
      <View style={Styles.Optioncontainer}>
        <View style={Styles.sideOptionsBar} />
        <View style={Styles.sideOptions}>
          {/* <Text style={Styles.option}></Text>
            <Text style={Styles.option}></Text>
            <Text style={Styles.option}></Text>
            <Text style={Styles.option}></Text>
            <Text style={Styles.option}></Text> */}
        </View>
      </View>
      <View style={Styles.buttombar}></View>
    </SafeAreaView>
  );
};

export default Item_page;

const Styles = StyleSheet.create({
  mainheader: {
    backgroundColor: '#1C161E',
    height: hp('100%'),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subheader: {},
  heading1: {color: '#EFE3C880', fontSize: 30},
  heading2: {color: '#EFE3C8FF', fontSize: 40},
  headericon: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: '8%',
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  images: {
    width: 40,
    height: 40,
  },
  textinputcontainer: {
    flexDirection: 'column',
    paddingTop:'4%'
  },
  textinputicon: {
    paddingHorizontal:'15%',
  },
  searchicon:{
    position:'absolute',
    paddingHorizontal:'30%',
    marginVertical:'4%',

  },
  textinput: {
    paddingHorizontal:'16%',
    backgroundColor: '#414141',
    opacity:0.5,
    marginHorizontal:'6%',
    borderRadius:5
  },
  text:{
    color:'#EFE3C8'
  },
  Optioncontainer: {},
  sideOptionsBar: {},
  sideOptions: {},
  option: {},
  buttombar: {},
});

// const Styles = StyleSheet.create({
//   contrainer: {
//     backgroundColor: '#201520',
//     opacity: 0.9,
//     height: hp('100%'),
//   },

//   titlecontrainer: {
//     // position:'absolute',
//     flexDirection: 'column',
//     paddingTop: '8%',
//     paddingLeft: '5%',
//   },

//   title1: {color: '#fff', opacity: 0.9, fontSize: 24},

//   title2: {color: '#EFE3C8', fontSize: 50},

//   mainprofilecontrainer: {
//     padding: '7%',
//     position: 'absolute',
//   },

//   profilecontrainer: {
//     alignItems: 'flex-end',
//     borderWidth: 2,
//     borderRadius: 100,
//     borderColor: '#DCAA70',
//     marginStart: '86%',
//   },

//   profile: {
//     alignItems: 'center',
//     margin: '5%',
//     width: wp('10%'),
//     height: hp('5%'),
//   },

//   searchcontrainer: {
//     backgroundColor: '#171017',
//     margin: '5%',
//   },

//   search: {
//     color: '#EFE3C8',
//     opacity: 0.7,
//   },

//   sidemeancontrainer: {
//     // flexDirection:'column',
//     // alignItems: 'flex-start',
//   },

//   sidemean: {
//     position: 'absolute',
//     backgroundColor: '#784A48',
//     opacity: 0.4,
//     borderTopRightRadius: 90,
//     paddingTop: '39%',
//     justifyContent: 'space-evenly',
//     // paddingEnd:'1%',
//   },

//   mean: {
//     color: '#EFE3C8',
//     marginVertical: '8%',
//     textAlign: 'center',
//     fontSize: 20,
//     transform: [{rotateZ: '-90deg'}],
//   },

//   itemcontrainer: {
//     alignItems: 'center',
//     paddingLeft: '25%',
//   },

//   item: {
//     justifyContent: 'space-evenly',
//     margin: '5%',
//     borderWidth: 2,
//     borderColor: '#FFF',
//     // padding:'8%',
//     // margin:'5%',
//     // marginLeft:'5%'
//   },
// });
