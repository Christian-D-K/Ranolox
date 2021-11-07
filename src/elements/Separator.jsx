import React from "react";
import { color } from "../constants/Colors";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function Separator(props) {
  const { title } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.separatorText}>{title}</Text>
      <View style={styles.separatorBar}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    height: 24,
  },
  separatorBar: {
    backgroundColor: color.lightGray,
    justifyContent: 'center',
    height: 3,
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
  },
  separatorText: {
    textAlign: 'center',
    backgroundColor: color.paleWhite,
    color: color.lightGray,
    fontSize: 24,
    zIndex: 5,
    paddingLeft: 10,
    paddingRight: 10,
    lineHeight: 24,
  }
})
