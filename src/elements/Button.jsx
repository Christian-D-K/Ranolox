import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import {
  string,
  func,
  bool,
} from 'prop-types';

export default function Button(props) {
  const {
    buttonText,
    onPressFunc,
    buttonColor,
    buttonTextColor,
    thin,
  } = props;

  return (
    <TouchableOpacity
      onPress={onPressFunc}
      style={[
        thin ? styles.thinButtonContainer : styles.buttonContainer,
        styles.commonContainerStyle,
        { backgroundColor: buttonColor },
      ]}
    >
      <Text
        style={[
          thin ? styles.thinButtonText : styles.buttonText,
          styles.commonTextStyle,
          { color: buttonTextColor },
        ]}
      >
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  buttonText: string,
  onPressFunc: func,
  buttonColor: string.isRequired,
  buttonTextColor: string.isRequired,
  thin: bool,
};

Button.defaultProps = {
  buttonText: '',
  onPressFunc: null,
  thin: false,
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: 40,
    width: 280,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 26,
    lineHeight: 40,
  },
  thinButtonContainer: {
    height: 32,
    width: 144,
    borderRadius: 6,
  },
  thinButtonText: {
    fontSize: 18,
    lineHeight: 32,
  },
  commonContainerStyle: {
    marginVertical: 8,
    alignSelf: 'center',
  },
  commonTextStyle: {
    justifyContent: 'center',
    textAlign: 'center',
  },
});
