import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { color } from '../constants/Colors';
import Button from '../elements/Button';
import InputArea from '../elements/InputArea';
import RanoloxBox from '../elements/RanoloxBox';
import Separator from '../elements/Separator';

export default function BoxListScreen() {
  const [inputValue, setInputValue] = useState('');
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.inner}>
          <Separator title="New BOX" />
          <InputArea
            title="BOX name"
            inputValueSet={setInputValue}
            inputValue={inputValue}
          />
          <Button
            buttonText="Button"
            onPressFunc={() => {}}
            buttonColor={color.blue_dark}
            buttonTextColor={color.white_pure}
          />
          <Button
            buttonText="ThinButton"
            onPressFunc={() => {}}
            buttonColor={color.purple_pink}
            buttonTextColor={color.white_pure}
            thin
          />
          <RanoloxBox
            boxName="Studies"
            boxDescription="Decide what subject to study next.
            Math, English, Tech, Biorogy and phirosophy"
            numberOfOptions={6}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FCFD',
  },
  inner: {
    marginBottom: 300,
  },
});
