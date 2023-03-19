import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Ranking from '../screens/Ranking';
import Header from '../components/Header';
import Styles from '../Styles/Styles';
import Ionicons from '@expo/vector-icons/Ionicons'


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <NavigationContainer>
            <Header name='Mateus Teotonho' />
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Styles.colorOrange,
                tabBarInactiveTintColor:Styles.coloWhite,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: Styles.colorGreen,
                    height: 60
                }
                

            }}>
                <Tab.Screen name='Home' component={Home} options={{
                tabBarIcon: ({ color}) => (
                <Ionicons name="home" size={25} color={color} />
            ),
            }} />
                <Tab.Screen name='Ranking' component={Ranking} options={{
                    tabBarIcon: ({color }) => (
                        <Ionicons name="trophy" size={25} color={color} />
                    ),
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    )

}