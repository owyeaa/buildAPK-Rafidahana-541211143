import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const ButtonSecondarySmall = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.parentBtnPrimary}>
      <Text style={styles.textPrimary}>{props.tulisan}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textPrimary: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    color: "#ffffff",
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 16
  },
  parentBtnPrimary: {
    borderRadius: 100,
    backgroundColor: "#B31312",
    borderColor: "salmon",
    borderWidth: 1.5
  },
})

export default ButtonSecondarySmall;