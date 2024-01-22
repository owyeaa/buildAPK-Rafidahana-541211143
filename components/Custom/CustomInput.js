import { TextInput, View, StyleSheet} from 'react-native';

const CustomInput = (props) => {
  return(
    <View style={styles.inputView}>
      <TextInput
          style={props.inputText}
          placeholder={props.placeholder}
          placeholderTextColor="grey"
        />
    </View>
  );
}

const styles = StyleSheet.create({ 
  inputView: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    padding: 20,
    borderWidth: 1,
    marginBottom: 13,
    borderColor: '#A8A196'
  },
});

export default CustomInput;