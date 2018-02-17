/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const DATA = ['hello', 'world'];


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Carousel 
          data={DATA}
          renderItem={({ item }) => {
            return (
              <View style={{ backgroundColor: 'blue', 
                width: Dimensions.get("window").width - 50, 
                height: 100,
                
                }}
              >
                <Text>{item}</Text>
              </View>
            );
          }}
          sliderWidth={Dimensions.get("window").width}
          itemWidth={Dimensions.get("window").width - 40}
          slideStyle={{ width: Dimensions.get("window").width - 50 }}
          inactiveSlideShift={0}
          ref={(c) => this.carousel = c}
          onSnapToItem={() => console.log('snapped!!')}
          
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
