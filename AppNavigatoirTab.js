import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from  'react-navigation-tabs';
import DonateScreen from  './screens/DonateBook';
import RequestBook from './screens/RequestBook';


export const AppNavigatorTab=createBottomTabNavigator({
    donateBooks:{
        screen:DonateScreen,
        navigationOptions:{
            tabBarIcon:<Image source={require('./assets/donateBook.jpg')} style={{width:20, height:20}}/>,
            tabBarLabel:'Donate Book'
        }

    },
    requestBooks:{
        screen:RequestBook,
        navigationOptions:{
            tabBarIcon:<Image source={require('./assets/requestBook.png')} style={{width:20, height:20}}/>,
            tabBarLabel:'Request Book'
        }
    }
})