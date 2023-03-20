import AppStack from './src/Navigation/AppStack'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/Navigation/AuthStack';






export default function App() {
 

  return (
    <NavigationContainer>
      {/* <AppStack/> */}
      <AuthStack />
    </NavigationContainer>

  )

}

