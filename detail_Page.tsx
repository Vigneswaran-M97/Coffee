
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
import Back_Button from './Components/Details_Page/back-button';

function Details_Page(): JSX.Element {
  var [id1, setid1] = useState(false);
  var [id2, setid2] = useState(false);
  var [id3, setid3] = useState(false);
  var [id4, setid4] = useState(false);

  return (
    // <SafeAreaView>

    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} backgroundColor={'#201520'} />
      <Back_Button/>

      <View style={styles.content}>
        <View style={styles.titlecontent}>
          <Text style={styles.title}>Cappuccino</Text>

          <TouchableOpacity
            onPress={() => {
              setid4(!id4);
            }}>
            {id4 ? (
              <Icon
                style={styles.imagelike}
                name="heart"
                size={30}
                color="#C94C4C"
              />
            ) : (
              <Icon
                style={styles.imagelike}
                name="heart-o"
                size={30}
                color="#fff"
              />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.subcontent}>
          <Text style={styles.sub}>Drizzled with Caramel</Text>
          <Text style={styles.sub1}>⭐ 4.5</Text>
        </View>

        <Text style={styles.dec} numberOfLines={5}>
          A single espresso shot poured into hot foamy milk, with the surface
          topped with mildly sweetened cocoa powder and drizzled with
          scrumptious caramel syrup ...
          <Text style={styles.dec1}>Read More</Text>
        </Text>

        <View>
          <Text style={styles.optiontitel}>Choice of Milk</Text>
        </View>

        <View style={styles.Scroll}>
          <TouchableOpacity
            onPress={() => {
              setid1(true);
              setid2(false);
              setid3(false);
            }}>
            <Text
              style={[
                styles.option,
                id1
                  ? {backgroundColor: '#EFE3C8', color: '#000'}
                  : {color: '#FFF'},
              ]}>
              Oat Milk
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setid1(false);
              setid2(true);
              setid3(false);
            }}>
            <Text
              style={[
                styles.option,
                id2
                  ? {backgroundColor: '#EFE3C8', color: '#000'}
                  : {color: '#FFF'},
              ]}>
              Soy Milk
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setid1(false);
              setid2(false);
              setid3(true);
            }}>
            <Text
              style={[
                styles.option,
                id3
                  ? {backgroundColor: '#EFE3C8', color: '#000'}
                  : {color: '#FFF'},
              ]}>
              Almond Milk
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.proma}>
          <View style={styles.prom}>
            <Text style={styles.price}>Price</Text>
            <Text style={styles.amt}>₹249</Text>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.press}>
              <Text style={styles.presstext}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* </View> */}
    </SafeAreaView>
  );
}

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
    backgroundColor:'rgba(1,1,0,0.6)'
  },
  imagelike: {
    margin: '3%',
  },
  content: {margin: '5%', paddingTop: '95%'},
  titlecontent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {color: '#FFF', fontSize: 30, paddingVertical: '1%'},
  subcontent: {flexDirection: 'row'},
  sub: {
    color: '#FFF',
    fontSize: 20,
    paddingBottom: '2%',
    paddingEnd: '6%',
    borderColor: '#fff',
  },
  sub1: {
    color: '#FFF',
    fontSize: 15,
    paddingBottom: '2%',
    paddingEnd: '6%',
    borderColor: '#fff',
  },
  dec: {color: '#FFF', fontSize: 16, paddingTop: '2%', fontWeight: '400'},
  dec1: {color: '#FFF', fontSize: 16, paddingTop: '2%', fontWeight: 'bold'},
  optiontitel: {color: '#FFF', paddingTop: '10%', fontSize: 20},
  Scroll: {
    paddingTop: '4%',
    paddingBottom: '4%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  option: {
    color: '#FFF',
    fontSize: 18,
    borderRadius: 5,
    padding: '2%',
    paddingHorizontal: '5%',
    borderColor: '#fff',
    borderWidth: 1,
  },
  footer: {
    paddingStart: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  proma: {
    paddingTop: '10%',
    paddingHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  prom: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  price: {color: '#FFF', fontSize: 18},
  amt: {color: '#FFF', fontSize: 24},
  press: {
    width: '90%',
    borderRadius: 5,
    backgroundColor: '#EFE3C8',
    justifyContent: 'center',
  },
  presstext: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
  },
});

export default Details_Page;
