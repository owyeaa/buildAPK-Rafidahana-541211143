import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import ButtonSecondaryLarge from './Custom/btn_secondary_large'
import ButtonPrimaryLarge from './Custom/btn_primary_large'
import Input from './input'

export default function Tambah({navigation}) {
  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <View style={styles.text_top}>
          <Text style={styles.text_headline}>
            Tambah Data Siswa
          </Text>
        </View>
      </View>

      <View style={styles.main_content}>
        <View style={styles.form}>
          <Input title_input="Nama" place="Masukan nama anda"/>
          <Input title_input="NIS" place="Masukan NIS anda"/>
          <Input title_input="Kelas" place="Masukan kelas anda"/>
          <Input title_input="Email" place="contoh@gmail.com"/>
          <Input title_input="Alamat" place="Masukan alamat anda"/>
        </View>
        <View style={styles.button_pack}>
        
          <ButtonPrimaryLarge onPress={() => navigation.navigate('Home')} tulisan="Tambah Data"/>
          <ButtonSecondaryLarge onPress={() => navigation.navigate('Home')} tulisan="Batalkan"/>
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
    paddingTop: 20,
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
    fontWeight: 500,
  },
  // MAIN CONTENT
  main_content: {
    paddingHorizontal: 16,
    gap: 28
  },
  form: {
    gap: 18,
  },
  button_pack: {
    gap: 8
  },
});
