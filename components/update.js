import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import ButtonSecondaryLarge from './Custom/btn_secondary_large'
import ButtonPrimaryLarge from './Custom/btn_primary_large'
import Input from './input'

export default function update({navigation}) {
  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <View style={styles.text_top}>
          <Text style={styles.text_headline}>
            Edit Data Siswa
          </Text>
        </View>
      </View>

      <View style={styles.main_content}>
        <View style={styles.form}>
          <Input title_input="Nama Siswa" place="Javas Kastara Dihyan"/>
          <Input title_input="NIS" place="541211143"/>
          <Input title_input="Kelas" place="XII RPL 4"/>
          <Input title_input="Email" place="javakastaa@gmail.com"/>
          <Input title_input="Alamat" place="Semarang, Jawa Tengah"/>
        </View>
        <View style={styles.button_pack}>
        
          <ButtonPrimaryLarge onPress={() => navigation.navigate('Home')} tulisan="Perbarui Data"/>
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
    paddingTop: 38,
    paddingBottom: 20,
    paddingHorizontal: 16,
    backgroundColor: "#B31312"
  },
  text_top: {
    gap: 8
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
