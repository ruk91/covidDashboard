/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment, PureComponent} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import {createStore} from 'redux';
import {Provider, useSelector} from 'react-redux';
// import allReducers from './src/reducers';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-community/async-storage';
// import AppNavigation from './src/navigation';

// const store = createStore(allReducers);
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: false,
    };
    this._netConnectionHandler = this._netConnectionHandler.bind(this);
    this.getData = this.getData.bind(this);
    this.storeData = this.storeData.bind(this);
  }

  componentDidMount() {
    NetInfo.fetch().then((state) => {
      console.log('state:', state);
      // console.log('Is connected?', state.isConnected);
      this.updateStatus(state);
    });
    this.getData();
  }

  updateStatus(params) {
    this.setState({isConnected: params.isConnected});
  }

  componentWillUnmount() {
    const {isConnected} = this.state;
    // console.log('isConnected: ', isConnected);
    // NetInfo.removeEventListener('connectionChange', this._netConnectionHandler);
    this.storeData('mytexttosave');
  }

  _netConnectionHandler(connectionInfo) {
    console.log('connectionInfo: ', connectionInfo);
    if (connectionInfo.type === 'none') {
      this.setState({isConnected: true});
    } else {
      this.setState({isConnected: false});
    }
  }

  storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value);
    } catch (e) {
      // saving error
    }
  };

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      if (value !== null) {
        console.log('stored value: ', value);
        this.setState({text: value});
      }
    } catch (e) {
      // error reading value
    }
  };

  render() {
    const {isConnected, text} = this.state;
    return (
      <View>
        <Text>testing...</Text>
        <View style={{flexDirection: 'row'}}>
          <Text>Connection Status:</Text>
          {isConnected ? <Text>Connected</Text> : <Text>No result.</Text>}
        </View>
        <Text>{text}</Text>
      </View>
      // <Provider store={store}>
      //   <Fragment>
      //     <StatusBar backgroudColor={'#000'} barStyle="light-content" />
      //     <AppNavigation />
      //   </Fragment>
      // </Provider>
    );
  }
}

const styles = StyleSheet.create({
  // scrollView: {
  //   backgroundColor: Colors.lighter,
  // },
  // body: {
  //   backgroundColor: Colors.white,
  // },
});

export default App;
