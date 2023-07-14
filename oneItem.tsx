import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const OneItem = () => {
  return (
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
            source={require('./assets/Item1.png')}
          />
        </View>
        <View style={{paddingLeft: '20%'}}>
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
                  4.6
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
          Cinnamon & Cocoa
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
            <Text style={{fontSize: 25, color: 'rgba(255,255,255,1.0)'}}>
              ₹99
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
  );
};
export default OneItem;
