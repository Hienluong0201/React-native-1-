import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

const favorite = () => {
  return (
    <View style={styles.container}> 
    <View style={styles.imagecontainer}>
               <Image
               source={require("../../assets/images/Homeleft.png")}
               style={styles.image}
               />
               <Text style={styles.textcart}>Cart</Text>
                <Image
               source={require("../../assets/images/Homeright.png")}
               style={styles.image}
               />
   </View>
      <View style={styles.container1}>
        <Image
        source={require("../../assets/images/farorite11.png")}
        style={styles.image1}
        />
      </View>
    </View>
  )
}

export default favorite

const styles = StyleSheet.create({
  image1 : {
    borderTopLeftRadius : 20,
    borderTopRightRadius : 20,
    width : 350, 
    height : 457,
    
   
  },
  container1 : {
    width : '100%',
    height : 575,

  },
  imagecontainer : {
    top :30,
    left : 10,
    right : 10,
    flexDirection : 'row',
    justifyContent : 'space-between',
    width : '93%',
    height : 80,
    },
  textcart : {
    color : 'white',
    fontSize : 20,
    fontWeight : 'bold'
  },
 
  container : {
    flex : 1,
    backgroundColor : '#0c0f14',
    paddingHorizontal : 19,
    paddingTop : 30
  }
})