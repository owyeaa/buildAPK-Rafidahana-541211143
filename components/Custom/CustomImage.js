import { TouchableOpacity, Text, View, StyleSheet, Image} from 'react-native';

const CustomImg = (props) => {
  return(
    <Image
    source={props.gambarnya}
    style={props.stylegambar}
    />
  );
}

export default CustomImg;