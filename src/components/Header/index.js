import React from 'react'
import { StatusBar, StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import Styles from '../../Styles/Styles'
import { Feather } from '@expo/vector-icons'





const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64
export default function Header({navigation, name}) {

    return (
        <View style={[styles.container, styles.shadowProp]}>
            <View style={styles.content}>
                <Text style={[styles.username]}> {` Olá, ${name} `} </Text>
                <TouchableOpacity style={styles.buttonUser} onPress={() => navigation.openDrawer()}>
                    <Feather name='user' size={30} color={'white'} />
                </TouchableOpacity>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Styles.colorGreen,
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingEnd: 16,
        paddingStart: 15,
        paddingBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,

    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "space-between",
        
    },
    username: {
        
        fontSize: 25,
        fontWeight: 700,
        color: Styles.coloWhite,
        
        
    },
    buttonUser: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 44 / 2
    },
})
