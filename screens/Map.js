import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MQTT from 'sp-react-native-mqtt';

export default class Map extends Component {
    
    componentDidMount() {
        /* create mqtt client */
        MQTT.createClient({
            // uri: 'mqtt://test.mosquitto.org:1883',
            uri: 'mqtt://192.168.29.156:1883',
            clientId: 'wmd_test_publisher_1'
        }).then(function(client) {
        
            client.on('closed', function() {
            console.log('mqtt.event.closed');
            });
        
            client.on('error', function(msg) {
            console.log('mqtt.event.error', msg);
            });
        
            client.on('message', function(msg) {
            console.log('mqtt.event.message', msg);
            });
        
            client.on('connect', function() {
                console.log('connected');
                client.subscribe('/data', 0);
                client.publish('wmd/pager/test1', "on", 0, false);
            });
        
            client.connect();
        }).catch(function(err){
            console.log(err);
        });
    }
    
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Map</Text>
            </View>
        );
    }
}