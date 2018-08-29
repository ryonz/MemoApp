import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Appbar extends React.Component {
  render() {
    return (

      <View style={styles.appbar}>
        <View>
          <Text style={styles.appbarTitle}>MEMOTO</Text>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    padding: 30,
    backgroundColor: '#265366',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { widht: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    zIndex: 10,
  },
  appbarTitle: {
    color: '#fff',
    top: 15,
    fontSize: 18,
  },
})

export default Appbar;
