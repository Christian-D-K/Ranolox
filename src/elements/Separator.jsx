import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { string } from 'prop-types';

import { color } from '../constants/Colors';

export default function Separator(props) {
  const { title } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.separatorText}>{title}</Text>
      <View style={styles.separatorBar} />
    </View>
  );
}

Separator.propTypes = {
  title: string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    height: 24,
  },
  separatorBar: {
    backgroundColor: color.gray_light,
    justifyContent: 'center',
    height: 3,
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
  },
  separatorText: {
    textAlign: 'center',
    backgroundColor: color.white_pale,
    color: color.gray_light,
    fontSize: 24,
    zIndex: 5,
    paddingLeft: 10,
    paddingRight: 10,
    lineHeight: 24,
  },
});
