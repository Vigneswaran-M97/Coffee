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

type ItemData = {
  id: number;
  item: string;
};
const Item_page = () => {
  const data = [
    {
      id: 1,
      name: 'Cinnamon & Cocoa',
      rating: 4.5,
      price: '₹99',
      image: require('./assets/Item1.png'),
    },
    {
      id: 2,
      name: 'Drizzled with Caramel',
      rating: 4.5,
      price: '₹199',
      image: require('./assets/Item2.png'),
    },
    {
      id: 3,
      name: 'Bursting Blueberry',
      rating: 4.5,
      price: '₹249',
      image: require('./assets/Item3.png'),
    },
    {
      id: 4,
      name: 'Dalgona Whipped Macha',
      rating: 4.5,
      price: '₹299',
      image: require('./assets/Item1.png'),
    },

    {
      id: 5,
      name: 'Cinnamon & Cocoa',
      rating: 4.5,
      price: '₹99',
      image: require('./assets/Item2.png'),
    },
    {
      id: 6,
      name: 'Drizzled with Caramel',
      rating: 4.5,
      price: '₹199',
      image: require('./assets/Item3.png'),
    },
    {
      id: 7,
      name: 'Bursting Blueberry',
      rating: 4.5,
      price: '₹249',
      image: require('./assets/Item1.png'),
    },
    {
      id: 8,
      name: 'Dalgona Whipped Macha',
      rating: 4.5,
      price: '₹299',
      image: require('./assets/Item2.png'),
    },
  ];
  const option_data: ItemData[] = [
    {id: 1, item: 'Cappuccino'},
    {id: 2, item: 'Latte'},
    {id: 3, item: 'Americano'},
    {id: 4, item: 'Espresso'},
    {id: 5, item: 'Flat White'},
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
            style={Styles.searchicon}
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
          <FlatList
            data={option_data}
            renderItem={({item}) => (
              <View>
                <TouchableOpacity>
                  <Text style={Styles.optionText}>{item.item}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
      <View>
        <View style={Styles.viewCardContainer}>
          <FlatList
            data={data}
            numColumns={2}
            renderItem={item => (
              <View
              style={{
                backgroundColor: '#414141',
                borderRadius: 20,
                width: '40%',
                height:'60%'
              }}>
                <View>
                  <View style={{alignItems: 'center', marginTop: '10%'}}>
                    <Image
                      style={{position: 'absolute', height: 100, width: 100}}
                      source={item.item.image}
                    />
                  </View>
                  <View style={{paddingLeft: '11%'}}>
                    <View
                      style={{
                        width: '39%',
                        height: '45%',
                        borderTopLeftRadius: 40,
                        borderBottomRightRadius: 90,
                        backgroundColor: 'rgba(1,1,0,0.6)',
                      }}>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-evenly',
                        }}>
                        <View>
                          <Icon name="star" color={'#D3A601'} />
                        </View>

                        <View>
                          <Text
                            style={{
                              color: 'rgba(255,255,255,1.0)',
                              textAlign: 'center',
                              fontSize: 18,
                            }}>
                            {item.item.rating}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>

                <View style={{}}>
                  <Text
                    style={{
                      color: 'rgba(255,255,255,1.0)',
                      fontSize: 25,
                      marginTop: '-10%',
                      paddingStart: '15%',
                    }}>
                    {item.item.name}
                  </Text>
                </View>

                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                      paddingTop: '5%',
                    }}>
                    <View
                      style={{
                        borderRadius: 10,
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        paddingHorizontal: '25%',
                        paddingVertical: '4%',
                        marginBottom: '10%',
                      }}>
                      <Text
                        style={{fontSize: 25, color: 'rgba(255,255,255,1.0)'}}>
                        {item.item.price}
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                      width: '70%',
                      marginStart: '15%',
                    }}>
                    <TouchableOpacity
                      style={{
                        flex: 3,
                        backgroundColor: 'rgba(239,227,200,1.0)',
                        borderRadius: 10,
                        justifyContent: 'center',
                        padding: '10%',
                      }}>
                      <View>
                        <Icon style={{}} name="minus" size={15} />
                      </View>
                    </TouchableOpacity>

                    <View
                      style={{
                        flex: 6,
                        justifyContent: 'center',
                        padding: '10%',
                      }}>
                      <Text
                        style={{
                          fontSize: 20,
                          textAlign: 'center',
                          color: 'rgba(255,255,255,1.0)',
                        }}>
                        0
                      </Text>
                    </View>

                    <TouchableOpacity
                      style={{
                        flex: 3,
                        backgroundColor: 'rgba(239,227,200,1.0)',
                        borderRadius: 10,
                        justifyContent: 'center',
                        padding: '10%',
                      }}>
                      <View>
                        <Icon name="plus" size={15} />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
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
    paddingTop: '4%',
  },
  textinputicon: {
    paddingHorizontal: '15%',
  },
  searchicon: {
    position: 'absolute',
    paddingHorizontal: '30%',
    marginVertical: '4%',
  },
  textinput: {
    paddingHorizontal: '16%',
    backgroundColor: '#414141',
    opacity: 0.5,
    marginHorizontal: '6%',
    borderRadius: 10,
  },
  text: {
    color: '#EFE3C8',
  },
  Optioncontainer: {
    position: 'absolute',
    marginTop: '35%',
    backgroundColor: '#784A48',
    alignItems: 'flex-start',
    height: '100%',
    borderTopEndRadius: 50,
    width: '11%',
  },
  sideOptionsBar: {
    padding: '50%',
    alignItems: 'center',
  },
  optionText: {
    color: '#fff',
    marginVertical: '30%',
    marginHorizontal: '-22%',
    textAlign: 'center',
    width: '150%',
    fontSize: 14,
    marginBottom: '180%',
    marginTop: '50%',
    transform: [{rotateZ: '-90deg'}],
  },
  viewCardContainer: {
    // margin:40,
    paddingLeft: 50,
    // alignItems: 'center',
    // justifyContent: 'center',
    // // marginHorizontal:'10%',
    // // marginVertical:'10%',
    // // marginRight:'10%',
    // width:'90%'
    // position:'absolute',
    // borderWidth: 2,
    // borderColor: '#fff',
    // marginTop:'10%',
    // marginLeft: '12%',
  },
  mainviewCard: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    margin: '3%',
    width: '45%',
  },
  imageviewCard: {
    marginTop: '10%',
  },
  imageview: {},
  rateviewCard: {},
  rateview: {fontSize: 20, color: '#fff'},
  nameviewCard: {},
  nameview: {
    fontSize: 20,
    color: '#fff',
  },
  priceviewCard: {},
  priceview: {
    fontSize: 20,
    color: '#fff',
  },
  iconviewCard: {},
  sideOptions: {},
  option: {},
  buttombar: {},
});
