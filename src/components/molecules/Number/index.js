import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NumberFormat from 'react-number-format';

const Number = ({number, type, styles}) => {
  if (type === 'decimal') {
    return (
      <NumberFormat
        value={number}
        renderText={value => <Text style={styles}>{value}</Text>}
        decimalSeparator="."
        displayType="text"
        decimalScale={1}
        fixedDecimalScale
      />
    );
  }
  return (
    <NumberFormat
      value={number}
      thousandSeparator="."
      renderText={value => <Text style={styles}>{value}</Text>}
      prefix="IDR "
      decimalSeparator=","
      displayType="text"
    />
  );
};

export default Number;

const styles = StyleSheet.create({});
