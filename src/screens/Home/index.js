import { View } from 'react-native';
import Header from '../../components/Header/';
import Slider from '../../components/Slider';
import Styles from '../../Styles/Styles';



export default function Home() {
  return (
    <View style={Styles.center}>
      <Header />


      <Slider />


    </View>
  );
}
