import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Link } from 'expo-router'
const Register = () => {
  return (
    <View style={styles.container}>
      <Image
      source={require("../assets/images/Group 73.png")}
      style = {styles.logo}
      />
      <Text style={styles.welcome} >
      Welcome to Lungo !!
      </Text>
      <Text style = {styles.register}>
        Register to Continue
      </Text>
    <View style={styles.imputcontainer}>
    <TextInput
    style={styles.imput}
    placeholder='Name'
    />
    </View>
    <View style={styles.imputcontainer1}>
    <TextInput
    style={styles.imput}
    placeholder='Email'
    />
    </View>
    <View style={styles.imputcontainer1}>
    <TextInput
    style={styles.imput}
    placeholder='Password'
    />
     <Image
    source={require("../assets/images/Vector.png")}
    style={styles.eye}
          />
    </View>
    <View style={styles.imputcontainer1}>
    <TextInput
    style={styles.imput}
    placeholder='Re-type password'
    />
     <Image
    source={require("../assets/images/Vector.png")}
    style={styles.eye}
          />
    </View>
    <Link href="./dom" asChild>
    <TouchableOpacity style={styles.registerbutton} >
      <Text style={styles.textregister}>
      Register
      </Text>
    </TouchableOpacity>
    </Link>
    <View style={styles.dncontainer}>
      <Text style={styles.dntk}>
        You have an account? Click{' '}
      </Text>
      <Link href="/Login">
      <Text style={styles.click}>
        Sign in 
      </Text>
      </Link>
    </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  click: {
    color: '#d17842',
  },
  dntk: {
    fontSize: 12,
    lineHeight: 26,
    color: '#828282',
  },
  dncontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textregister : {
    fontSize : 14,
    lineHeight : 26,
    color : '#fff',
    fontWeight : 'bold'

  },
  registerbutton : {
    width : '100%',
    height : 57,
    backgroundColor : '#d17842',
    borderRadius : 20,
    marginTop : 41,
    justifyContent : 'center',
    alignItems : 'center'
  },
  eye :{
    width : 29,
    height : 18,
    right : 13,
    top : 35,
    position : 'absolute'
  },
  imputcontainer1 : {
    width : '100%',
    paddingTop : 16
  },
  imputcontainer : {
    width : '100%',
    paddingTop : 31
  },
  imput : {
    backgroundColor :'#fff',
    color : '#828282',
    width : '100%',
    height : 48 ,
    paddingHorizontal : 16,
    paddingVertical : 12,
    borderRadius : 8,
    fontWeight : 'bold'
  },
  register : {
    fontSize : 12,
    lineHeight : 26,
    color : '#828282',
    marginTop : 16,
    fontWeight : 'bold'
  },
  welcome : {
    fontSize : 16,
    lineHeight : 26,
    color : '#fff',
    marginTop : 10,
    fontWeight : 'bold'
  },
  logo : {
    width : 142,
    height : 142
  },
  container : {
    flex : 1,
    backgroundColor : '#0c0f14',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems :'center',
    paddingHorizontal : 14
    
  }
    
})