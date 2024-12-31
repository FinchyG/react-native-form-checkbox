import React from "react";
import {StyleSheet, Text} from 'react-native';

function H2Header(props) {

  const styles = StyleSheet.create({
    HeadingText: {
      fontSize: 25,
      alignItems: 'center',
      fontWeight: 'bold',
      marginBottom: 8
    }
  });
  
  return (
    <Text style={styles.HeadingText}>
      {props.textContent}
    </Text>
  );
}

export default H2Header;