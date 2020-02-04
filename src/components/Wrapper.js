import React from 'react';
import {View, StyleSheet} from 'react-native';
import {PERCENTAGE_TO_DP} from '../constants/enums';

const Wrapper = props => <View style={styles.container}>{props.children}</View>;

const styles = StyleSheet.create({
  container: {
    padding: PERCENTAGE_TO_DP.WP(2),
  },
});

export default Wrapper;
