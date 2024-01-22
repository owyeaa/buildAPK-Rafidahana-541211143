import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';

const item_data = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.parent_data}>
      <View style={styles.data_content}>
        <Image>{props.image}</Image>
        <Text style={styles.nama_siswa}>{props.name}</Text>
        <Text style={styles.email_siswa}>{props.email}</Text>
      </View>
      <Image style={styles.icon}
        source={require('../assets/next.png')}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  nama_siswa: {
    fontWeight: '500',
    fontSize: 20
  },
  email_siswa: {
    fontSize: 16,
    color: "#428DFD"
  },
  icon: {
    height: 28,
    width: 28
  },
  parent_data: {
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  data_content: {
    gap: 6
  }
})

export default item_data;