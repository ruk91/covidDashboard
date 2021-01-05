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
// import AppNavigation from './src/navigation';

// const store = createStore(allReducers);
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this._netConnectionHandler = this._netConnectionHandler.bind(this);
  }

  componentDidMount() {
    NetInfo.fetch().then((state) => {
      console.log('state:', state);
      console.log('Is connected?', state.isConnected);
    });
  }

  componentWillUnmount() {
    // NetInfo.removeEventListener('connectionChange', this._netConnectionHandler);
  }

  _netConnectionHandler(connectionInfo) {
    console.log('connectionInfo: ', connectionInfo);
    if (connectionInfo.type === 'none') {
      this.setState({offline: true});
    } else {
      this.setState({offline: false});
    }
  }

  render() {
    // const counter = useSelector((state) => state.counter);
    return (
      <View>
        <Text>testing...</Text>
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
