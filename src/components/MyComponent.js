import React from 'react';
import {View, Text} from 'react-native';

const MyComponent = props => {
  const {text} = props;
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

export default MyComponent;
