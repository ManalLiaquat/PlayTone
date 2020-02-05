import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Wrapper from '../components/Wrapper';
import {DISPATCH_TO_STORE} from '../constants/functions';
import {AUTH} from '../constants/reduxTypeNames';

const HomeScreen = () => {
  const [sampleState, setSampleState] = useState('');

  useEffect(() => {
    _sampleMethodName();
    return () => {
      // dispatching auth object to null
      DISPATCH_TO_STORE(AUTH, null);
    };
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
      <Wrapper>
        <Text>Home Screen</Text>
        {_sampleMethodName_jsx()}
      </Wrapper>
    </View>
  );
};

export default HomeScreen;
