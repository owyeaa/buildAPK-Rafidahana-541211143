import { TouchableOpacity, Text, View, StyleSheet} from 'react-native';

const CustomBtn = (props) => {
  return(
    <View style={props.loginBtn}>
      <TouchableOpacity 
      style={props.loginBtn} onPress={props.onPress}>
        <Text style={props.loginText}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CustomBtn;