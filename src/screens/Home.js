import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import MyComponent from '../components/MyComponent';
import {PLATFORM_OS} from '../constants/enums';

const HomeScreen = () => {
  const [sampleState, setSampleState] = useState('');

  useEffect(() => {
    _sampleMethodName();
    return () => {};
  }, []);

  const _sampleMethodName = () => {
    console.log('for computational work');
    setSampleState('sample state');
  };

  const _sampleMethodName_jsx = () => {
    return (
      <View>
        <Text>Sample method for jsx only to render jsx</Text>
        <Text>{sampleState}</Text>
      </View>
    );
  };

  return (
    <View>
      <Text>Home Screen</Text>
      {_sampleMethodName_jsx()}
      <MyComponent
        text={
          PLATFORM_OS === 'android' ? 'This is Android phone' : 'This is iPhone'
        }
      />
    </View>
  );
};

export default HomeScreen;
