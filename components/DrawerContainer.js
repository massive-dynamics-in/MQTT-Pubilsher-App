import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Map from './../screens/Map';
import Settings from './../screens/Settings';

const MyDrawer = createDrawerNavigator();

export default class DrawerContainer extends Component {
    render() {
        return (
            <MyDrawer.Navigator initialRouteName="Map">
            
                <MyDrawer.Screen name="Map" component={Map} />
                <MyDrawer.Screen name="Settings" component={Settings} />

            </MyDrawer.Navigator>
        );
    }
}