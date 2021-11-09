import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { number, string } from 'prop-types';

import { color } from '../constants/Colors';

export default function RanoloxBox(props) {
  const { boxName, numberOfOptions, boxDescription } = props;
  return (
    <View style={styles.container}>
      {/* BOX上部 */}
      <View style={styles.upperContent}>
        <Text
          style={styles.boxDescription}
          numberOfLines={6}
        >
          {boxDescription}
        </Text>
        <View style={styles.numberOfOptionsCircle}>
          <Text style={styles.numberOfOptions}>{numberOfOptions}</Text>
        </View>
      </View>
      {/* BOX下部 */}
      <View style={styles.downContent}>
        <Text style={styles.boxName}>
          {boxName}
        </Text>
      </View>
    </View>
  );
}

RanoloxBox.propTypes = {
  boxName: string.isRequired,
  numberOfOptions: number,
  boxDescription: string,
};

RanoloxBox.defaultProps = {
  numberOfOptions: 0,
  boxDescription: '',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.purple_light,
    borderRadius: 16,
    height: 152,
    width: 152,
  },
  upperContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  downContent: {
    height: 40,
    marginBottom: 8,
  },
  boxDescription: {
    color: color.gray_dark,
    height: 104,
    marginTop: 8,
    marginLeft: 8,
    width: 96,
  },
  numberOfOptionsCircle: {
    backgroundColor: color.white_pure,
    borderRadius: 20,
    height: 40,
    marginTop: 8,
    marginRight: 8,
    width: 40,
  },
  numberOfOptions: {
    color: color.gray_dark,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 40,
  },
  boxName: {
    color: color.gray_dark,
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 40,
    paddingHorizontal: 8,
  },
});
