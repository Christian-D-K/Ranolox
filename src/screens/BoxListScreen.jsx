import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import InputArea from "../elements/InputArea";
import Separator from "../elements/Separator";

export default function BoxListScreen() {
  return (
    <View style={styles.container}>
      <Separator title={'Next action'}/>
      <InputArea title={'TEST'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FCFD',
  },
})
