import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import {createSwitchNavigator,createAppContainer } from 'react-navigation';
import {AppNavigatorTab} from './AppNavigatoirTab';
import RequestBook from './screens/RequestBook';
//import RequestBook  from './screens/RequestBook';
import DonateScreen  from './screens/DonateBook';


export default class App extends React.Component {
    render(){
      return (
        <View style={styles.container}>
          <AppContainer></AppContainer>
        </View>
      );
    }
}

const AppNavigator=createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  TabScreen:{screen:AppNavigatorTab}

})

const AppContainer=createAppContainer(AppNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
