import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {
  string,
  bool,
  func,
} from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

import { color } from '../constants/Colors';

export default function InputArea(props) {
  const {
    title,
    multiline,
    inputValueSet,
    inputValue,
  } = props;

  const [clearButtonView, setClearButtonView] = useState(1);

  // 初期値の設定
  const spreadInputBoxAnim = useRef(new Animated.Value(32)).current;

  // フォーカスイベント
  const onFocus = () => {
    Animated.timing(spreadInputBoxAnim, {
      toValue: 56,
      duration: 200,
    }).start();
    setClearButtonView(0);
  };

  // ブラーイベント
  const onBlur = () => {
    Animated.timing(spreadInputBoxAnim, {
      toValue: 32,
      duration: 200,
      delay: 50,
    }).start();
    setClearButtonView(1);
  };

  const clearInputValue = () => inputValueSet('');

  return (
    <View style={styles.inputContainer}>
      <Text
        style={styles.title}
      >
        {title}
      </Text>
      <Animated.View
        style={[styles.input, { height: spreadInputBoxAnim }]}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        <TextInput
          style={[styles.inputText]}
          value={inputValue}
          multiline={multiline}
          autoFocus
          onChangeText={inputValueSet}
        />
        <TouchableOpacity
          style={styles.clearButton}
          onPress={clearInputValue}
        >
          <Ionicons
            name="close-circle"
            size={24}
            color={color.gray_light}
            style={{ opacity: clearButtonView }}
          />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

InputArea.propTypes = {
  title: string.isRequired,
  multiline: bool,
  inputValueSet: func,
  inputValue: string,
};

InputArea.defaultProps = {
  multiline: false,
  inputValueSet: null,
  inputValue: '',
};

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  title: {
    marginHorizontal: 8,
    fontSize: 18,
    color: color.gray,
    height: 32,
  },
  input: {
    marginHorizontal: 8,
    paddingHorizontal: 8,
    backgroundColor: color.white_pure,
    borderBottomWidth: 0.3,
    borderBottomColor: color.gray_dark,
    flexDirection: 'row',
  },
  inputText: {
    fontSize: 18,
    paddingVertical: 8,
    color: color.gray_dark,
    width: '90%',
  },
  clearButton: {
    paddingHorizontal: 8,
    fontSize: 18,
    justifyContent: 'flex-end',
    color: color.gray,
    alignSelf: 'center',
  },
});
