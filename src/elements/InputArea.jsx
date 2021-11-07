import React, { useState } from "react";
import { color } from "../constants/Colors";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";

import {
  shape,
  string,
  bool,
} from 'prop-types';

export default function InputArea(props) {
  const { title, multiline } = props;
  const [textBody, setTextBody] = useState('');

  return (
    <View style={styles.inputContainer}>
      <Text
        style={styles.title}
      >
        {title}
      </Text>
      <View style={styles.input}>
        <TextInput
          style={styles.inputText}
          value={textBody}
          multiline={multiline}
          autoFocus
          onChangeText={(text) => { setTextBody(text); }}
        />
        <Text
          style={styles.clearButton}
        >
          X
        </Text>
      </View>
    </View>
  )

}

InputArea.propTypes = {
  title: string,
  textBody: string,
  multiline: bool,
};

InputArea.defaulProps = {
  title: '',
  textBody: 'Helo',
  multiline: false,
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  title: {
    marginHorizontal: 8,
    fontSize: 18,
    color: color.gray,
  },
  input: {
    height: 32,
    marginHorizontal: 8,
    paddingHorizontal: 8,
    backgroundColor: color.pureWhite,
    borderBottomWidth: 0.3,
    borderBottomColor: color.darkGray,
    flexDirection: 'row',
  },
  inputText: {
    fontSize: 18,
    paddingVertical: 8,
    color: color.darkGray,
    width: '90%',
  },
  clearButton: {
    backgroundColor: color.green,
    paddingHorizontal: 8,
    fontSize: 18,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    color: color.gray,
  }
})
