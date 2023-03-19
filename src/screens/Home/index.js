import { StyleSheet, View } from 'react-native';
import Slider from '../../components/Slider';
import Styles from '../../Styles/Styles';



export default function Home() {
  return (
    <View style={styles.container}>
      <Slider />
    </View>
  );
}


const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      backgroundColor: Styles.ColorOffWhite
    }

})
