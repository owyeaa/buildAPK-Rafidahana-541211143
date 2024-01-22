import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Button, ScrollView } from 'react-native';
import ButtonSecondarySmall from './Custom/btn_secondary_small'
import ItemData from './item_data'

export default function Home({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>

      <View style={styles.top}>
        <View style={styles.text_top}>
          <Text style={styles.text_title}>Welcome!</Text>
          <Text style={styles.text_headline}>
            Data Siswa                     SMK Telkom Purwokerto
          </Text>
        </View>
        <View style={styles.other_top}>
          <View style={styles.data_siswa}>
            <Text style={styles.text_total}>Total siswa</Text>
            <Text style={styles.jml_siswa}>5</Text>
          </View>
          <ButtonSecondarySmall onPress={() => navigation.navigate('Add')} tulisan="Tambah Data"/>
        </View>
      </View>

      <View style={styles.main_content}>
        <View>
          <Image style={styles.profile} source={require('../assets/javas.jpeg')}/>
          <ItemData onPress={() => 
            navigation.navigate('Detail')} name="Javas Kastara Dihyan" email="javakastaa@gmail.com"
          />
        </View>

        <View>
        <Image style={styles.profile} source={require('../assets/azriel.jpeg')}/>
        <ItemData onPress={() => 
          navigation.navigate('Detail')} name="Azriel Pratama" email="azrielp@gmail.com"
        />
        </View>

        <View>
        <Image style={styles.profile} source={require('../assets/nayla.jpeg')}/>
        <ItemData onPress={() => 
          navigation.navigate('Detail')} name="Nayla" email="Nayla@gmail.com"
        />
        </View>

        <View>
        <Image style={styles.profile} source={require('../assets/gafara.jpeg')}/>
        <ItemData onPress={() => 
          navigation.navigate('Detail')} name="Gafara" email="gafatof@gmail.com"
        />
        </View>
        
        <View>
        <Image style={styles.profile} source={require('../assets/aiden.jpeg')}/>
        <ItemData onPress={() => 
          navigation.navigate('Detail')} name="Aiden" email="aidenajs@gmail.com"
        />
        </View>

      </View>
      </View>
    </ScrollView>
  )
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
  text_title: {
    fontSize: 14,
    color: "#FFFFFF"
  },
  text_headline: {
    fontSize: 32,
    color: "#FFFFFF",
    fontWeight: 500
  },
  other_top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
  },
  data_siswa: {
    gap: 4,
    flexDirection: 'row'
  },
  text_total: {
    fontSize: 16,
    color: "#FFFFFF"
  },
  jml_siswa: {
    fontSize: 16,
    fontWeight: 500,
    color: "#FFFFFF"
  },
  // MAIN CONTENT
  main_content: {
    paddingHorizontal: 16,
    gap: 18
  },
  profile: {
    width: 353,
    height: 300,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10  
  }
});
