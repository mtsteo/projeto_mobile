import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
const Drawer = createDrawerNavigator();

export default function TabNavigator() {
    return (

            <Drawer.Navigator screenOptions={{ headerShown: false, drawerType: "slide" }}>
                <Drawer.Screen component={Home} name='home' />
            </Drawer.Navigator>
        
    )

}