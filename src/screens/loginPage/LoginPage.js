import { View, Text, Button } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function LoginPage({navigation}) {
  return (
    <View style={style.container}>
      <Button title='Entrar' onPress={()=> navigation.navigate('AppStack')}></Button>
      <Text>LoginPage</Text>
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})