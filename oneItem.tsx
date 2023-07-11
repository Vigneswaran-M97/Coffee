import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const OneItem = () => {
  return (
    <View
      style={{
        margin: 50,
        borderColor: '#000',
        borderWidth: 10,
        width: '50%',
        height: '55%',
      }}>
      <View>
        <View style={{alignItems: 'center', marginTop: '10%'}}>
          <Image
            style={{position: 'absolute', height: 150, width: 150}}
            source={require('./assets/Item1.png')}
          />
        </View>
        <View style={{paddingLeft: '11%'}}>
          <View
            style={{
              // borderWidth: 2,
              // borderColor: '#000',
              width: '39%',
              height: '45%',
              borderTopLeftRadius: 40,
              borderBottomRightRadius: 70,
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
                  style={{color: '#fff', textAlign: 'center', fontSize: 18}}>
                  4.6
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default OneItem;
