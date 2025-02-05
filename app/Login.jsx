import { Text, View , StyleSheet, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Login() {

  

  return (
    <View style={myStyles.container} >
    <Image
    source={require("../assets/images/Group 73.png")}
    style = {myStyles.logo}
    />
    <Text style={myStyles.welcome}>
      Welcome to lungo !!!
    </Text>
    <Text style = {myStyles.login}>Login to continue</Text>

    <View style = {myStyles.inputcontainer}>
      <TextInput
      style= {myStyles.input}
      placeholder="Enter Address"
      />  
    </View>
    <View style = {myStyles.inputcontainer}>
      <TextInput
      style= {myStyles.input}
      placeholder="PassWord"
      />
      <Image
      source={require("../assets/images/Vector.png")}
      style={myStyles.eye}
      />
    </View>
    <TouchableOpacity style={myStyles.loginbutton}>
      <Text style={myStyles.textlogin}>
        Sign in 
      </Text>
    </TouchableOpacity>


    <TouchableOpacity style={myStyles.googlebutton}>
      <Image
      source={require("../assets/images/gg.png")}
      />
      <Text >
        Sign in with Google
      </Text>
      <View></View>
    </TouchableOpacity>

    <View style={myStyles.dkcontainer}>
      <Text style={myStyles.Kctk}>
      Don’t have account? Click {' '}
      </Text>
      <Text style={myStyles.click}>
      Register
      </Text>

    </View>
    <View style={myStyles.rscontainer}>
      <Text style={myStyles.Kctk}>
      Forget Password? Click {' '} 
      </Text>
      <Text style={myStyles.click}>
      Reset
      </Text>

    </View>
    </View>
  );
};
 const myStyles = StyleSheet.create({
  rscontainer: {
      flexDirection : 'row',
      justifyContent : 'center',
      alignItems : 'center',
      
  },
  click : {
    color : '#d17842',

  },
  Kctk : {
  fontSize : 12,
  lineHeight : 26,
  color : '#828282'

  },
  dkcontainer: {
      flexDirection : 'row',
      justifyContent : 'center',
      alignItems : 'center',
      marginTop : 30
     
  },
  textlogin : {
    fontSize : 14,
    lineHeight : 26,
    color : '#fff'
  },
  loginbutton : {

    width : '100%',
    height : 57,
    backgroundColor : '#d17842',
    borderRadius : 20,
    marginTop : 20,
    justifyContent : 'center',
    alignItems : 'center'

  },
  googlebutton :{
    width : '100%',
    height : 57,
    backgroundColor : '#fff',
    marginTop : 20,
    borderRadius : 20,
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    paddingHorizontal : 25

  },

  eye : {
      width : 29,
      height : 18,
      position : 'absolute',
      top : 16,
      right : 13
      
  },
  inputcontainer :{
    marginTop : 31,
    width : '100%'
  },
  input : {
    backgroundColor : '#fff',
    width : '100%',
    height : 48,
    borderRadius : 8,
    paddingHorizontal : 16,
    paddingVertical : 12
  },
  login : {
    fontSize : 12,
    color : '#828282',
    lineHeight : 26,
    fontWeight : 'bold',
    marginTop : 16
  },
  welcome : {
    fontSize : 16 ,
    color : '#fff',
    lineHeight : 26,
    fontWeight : 'bold',
    marginTop : 10,


  },
  logo : {
    width : 142,
    height : 142
  },
container : {
  flex : 1,
  backgroundColor : '#0c0f14',
  flexDirection : "column",
  justifyContent : "center",
  alignItems : "center",
  paddingHorizontal : 14
}

 })
  

 
