/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView} from 'react-native';
import Details_Page from './detail_Page';
import Item_page from './Item_Page';
// import Details_Page from './oneItem';



function App(): JSX.Element {

  return (   
    <SafeAreaView>
      <Details_Page/>      
    </SafeAreaView>
  );
}


export default App;
