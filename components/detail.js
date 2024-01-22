import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import ButtonSecondaryLarge from './Custom/btn_secondary_large'
import ButtonPrimaryLarge from './Custom/btn_primary_large'
import ItemData from './view_data_item'

export default function Tambah({navigation}) {
  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <View style={styles.text_top}>
          <Text style={styles.text_headline}>
            Data Siswa
          </Text>
        </View>
      </View>

      <View style={styles.main_content}>
        <View style={styles.form}>
          <ItemData title_data="Nama Siswa" text_data="Javas Kastara Dihyan"/>
          <ItemData title_data="NIS" text_data="541211143"/>
          <ItemData title_data="Kelas" text_data="XII RPL 4"/>
          <ItemData title_data="Email" text_data="javakastaa@gmail.com"/>
          <ItemData title_data="Alamat" text_data="Semarang, Jawa Tengah"/>
        </View>
        <View style={styles.button_pack}>
        
          <ButtonPrimaryLarge onPress={() => navigation.navigate('Update')} tulisan="Edit Data"/>
          <ButtonSecondaryLarge onPress={() => navigation.navigate('Home')} tulisan="Hapus Data"/>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
  },
  // TOP
  top: {
    gap: 24,
    paddingTop: 38,
    paddingBottom: 20,
    paddingHorizontal: 16,
    backgroundColor: "#B31312"
  },
  text_top: {
    gap: 8,
  },

  text_headline: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: 500
  },
  // MAIN CONTENT
  main_content: {
    paddingHorizontal: 16,
    gap: 28
  },
  form: {
    gap: 18
  },
  button_pack: {
    gap: 8
  }
});
